import { Producto } from "./producto.model"
import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Proveedor } from "./proveedor.model";
import { Filtro, Paginacion } from "./configClasses.repository";
import { ConfirmacionOrden, Orden } from './orden.model';



const productosUrl = '/api/productos/';
const proveedoresUrl  = '/api/proveedores/'

@Injectable()
export class Repository {

    private FiltroObject = new Filtro();
    private paginacionObject = new Paginacion();

    constructor(private http: HttpClient) {
        this.Filtro.relacionado = true;

        this.getProductos();
    }


    login(nombre: string, password: string) {
        return this.http.post("api/account/login",
            { nombre: nombre, password: password }, { observe: 'response' });
    }

    logout() {
        this.http.post("api/account/logout", null).subscribe(r => { });
    }


    eliminarProducto(id: number) {
        this.http.delete(productosUrl + id).subscribe(respuesta => {
            console.log(respuesta);
            this.getProductos();
        });
    }

    eliminarProveedor(id: number) {
        this.http.delete(proveedoresUrl + id).subscribe(
            respuesta => {
                console.log(respuesta);
                this.getProveedores();
                this.getProductos();
            })
    }

    actualizarProducto(id: number, changes: Map<string, any>) {
        let patch = [];
        changes.forEach((value, key) =>
            patch.push({ op: "replace", path: key, value: value }));
        this.http.patch(productosUrl + "/" + id, patch).subscribe(respuesta => {
            console.log(respuesta);
            this.getProductos();
        });
    }

    getProducto(id: number) {
        this.http.get(productosUrl + id)
            .subscribe(response =>
                this.producto = response
            );
    }

    getProveedores() {
        this.http.get(proveedoresUrl).subscribe((respuesta: any[]) => {
            this.proveedores = respuesta;
            console.log(respuesta);
        });

    }

    getProductos() {
        let url = productosUrl + '?relacionado=' + this.Filtro.relacionado;
        if (this.Filtro.busqueda) {
            url += url + '&busqueda=' + this.Filtro.busqueda;
        }
        if (this.Filtro.categoria) {
            url += url + '&categoria=' + this.Filtro.categoria;
        }
        url += '&metadata=true';
        this.http.get(url).subscribe((respuesta: any) => {
            console.log(respuesta);
            this.productos = respuesta.data;
            this.categorias = respuesta.categorias;
            this.paginacion.paginaActual = 1; 
        });
    }

    CrearProducto(prod: Producto) {
        let data = {
            nombre: prod.nombre,
            categoria: prod.categoria,
            descripcion: prod.descripcion,
            precio: prod.precio,
            proveedor: prod.proveedor ? prod.proveedor.proveedorId : 0
        };
        this.http.post(productosUrl, data).subscribe((response: number) => {
            console.log(response);
            prod.productoId = response;
            this.productos.push(prod);
        });
    }

    CrearProductoYProveedor(prod: Producto, prov: Proveedor) {
        let data = {
            nombre: prov.nombre,
            ciudad: prov.ciudad,
            provincia: prov.provincia
        }
        this.http.post(proveedoresUrl, data).subscribe((response: number) => {
            prov.proveedorId = response;
            console.log(response);
            prod.proveedor = prov;
            this.proveedores = [];
            this.proveedores.push(prov);
            if (prod != null) {
                this.CrearProducto(prod);
            }
        });
    }

    RemplazarProducto(prod: Producto) {
        let data = {
            nombre: prod.nombre, categoria: prod.categoria,
            descripcion: prod.descripcion, precio: prod.precio,
            proveedor: prod.proveedor ? prod.proveedor.proveedorId : 0
        };
        this.http.put(productosUrl + "/" + prod.productoId, data)
            .subscribe(respusta => { this.getProductos(); console.log(respusta); });    
    }

    RemplazarProveedor(prov: Proveedor) {
        let data = {
            nombre: prov.nombre, ciudad: prov.ciudad, provincia: prov.provincia
        }
        this.http.put(proveedoresUrl + "/" + prov.proveedorId, data).subscribe(
            respuesta => {
                console.log(respuesta);
                this.getProductos();
            });
    }


    guardarDatosSession(tipoDato: string, data: any) {
        return this.http.post("api/session/" + tipoDato, data).subscribe(r => {
            console.log(r);
        });
    }



    obtenerDatosSession(tipoDato: string): Observable<any> {
        return this.http.get("api/session/" + tipoDato);
    }

    ordenes: Orden[] = [];

    getOrdenes() {
        this.http.get("/api/ordenes").subscribe((data: Orden[]) =>
        { this.ordenes = data; console.log(data) });
    }

    crearOrden(orden: Orden) {
        this.http.post("/api/ordenes/", {
            nombre: orden.nombre,
            direccion: orden.direccion,
            pago: orden.pago,
            productos: orden.productos,
            embarcado: false
        }).subscribe((r: ConfirmacionOrden) => {
            console.log(r);
            orden.confirmacionOrden = r;
            orden.carrito.borrar();
            orden.borrar();
        });
    }

    marcarOrden(orden: Orden) {
        this.http.post("/api/ordenes/" + orden.ordenId, {
            nombre: orden.nombre,
            direccion: orden.direccion,
            pago: orden.pago,
            productos: orden.productos,
            embarcado: true
        }).subscribe(r => {
            this.getOrdenes();
            
        });
    }



    producto: Producto;
    proveedores: Proveedor[] = [];
    productos: Producto[];
    categorias: string[] = [];


    get paginacion(): Paginacion {
        return this.paginacionObject;
    }

    get Filtro(): Filtro {
        return this.FiltroObject;
    }
}