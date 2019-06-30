import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Filtro, Paginacion } from "./configClasses.repository";
const productosUrl = '/api/productos/';
const proveedoresUrl = '/api/proveedores/';
let Repository = class Repository {
    constructor(http) {
        this.http = http;
        this.FiltroObject = new Filtro();
        this.paginacionObject = new Paginacion();
        this.ordenes = [];
        this.proveedores = [];
        this.categorias = [];
        this.Filtro.relacionado = true;
        this.getProductos();
    }
    login(nombre, password) {
        return this.http.post("api/account/login", { nombre: nombre, password: password }, { observe: 'response' });
    }
    logout() {
        this.http.post("api/account/logout", null).subscribe(r => { });
    }
    eliminarProducto(id) {
        this.http.delete(productosUrl + id).subscribe(respuesta => {
            console.log(respuesta);
            this.getProductos();
        });
    }
    eliminarProveedor(id) {
        this.http.delete(proveedoresUrl + id).subscribe(respuesta => {
            console.log(respuesta);
            this.getProveedores();
            this.getProductos();
        });
    }
    actualizarProducto(id, changes) {
        let patch = [];
        changes.forEach((value, key) => patch.push({ op: "replace", path: key, value: value }));
        this.http.patch(productosUrl + "/" + id, patch).subscribe(respuesta => {
            console.log(respuesta);
            this.getProductos();
        });
    }
    getProducto(id) {
        this.http.get(productosUrl + id)
            .subscribe(response => this.producto = response);
    }
    getProveedores() {
        this.http.get(proveedoresUrl).subscribe((respuesta) => {
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
        this.http.get(url).subscribe((respuesta) => {
            console.log(respuesta);
            this.productos = respuesta.data;
            this.categorias = respuesta.categorias;
            this.paginacion.paginaActual = 1;
        });
    }
    CrearProducto(prod) {
        let data = {
            nombre: prod.nombre,
            categoria: prod.categoria,
            descripcion: prod.descripcion,
            precio: prod.precio,
            proveedor: prod.proveedor ? prod.proveedor.proveedorId : 0
        };
        this.http.post(productosUrl, data).subscribe((response) => {
            console.log(response);
            prod.productoId = response;
            this.productos.push(prod);
        });
    }
    CrearProductoYProveedor(prod, prov) {
        let data = {
            nombre: prov.nombre,
            ciudad: prov.ciudad,
            provincia: prov.provincia
        };
        this.http.post(proveedoresUrl, data).subscribe((response) => {
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
    RemplazarProducto(prod) {
        let data = {
            nombre: prod.nombre, categoria: prod.categoria,
            descripcion: prod.descripcion, precio: prod.precio,
            proveedor: prod.proveedor ? prod.proveedor.proveedorId : 0
        };
        this.http.put(productosUrl + "/" + prod.productoId, data)
            .subscribe(respusta => { this.getProductos(); console.log(respusta); });
    }
    RemplazarProveedor(prov) {
        let data = {
            nombre: prov.nombre, ciudad: prov.ciudad, provincia: prov.provincia
        };
        this.http.put(proveedoresUrl + "/" + prov.proveedorId, data).subscribe(respuesta => {
            console.log(respuesta);
            this.getProductos();
        });
    }
    guardarDatosSession(tipoDato, data) {
        return this.http.post("api/session/" + tipoDato, data).subscribe(r => {
            console.log(r);
        });
    }
    obtenerDatosSession(tipoDato) {
        return this.http.get("api/session/" + tipoDato);
    }
    getOrdenes() {
        this.http.get("/api/ordenes").subscribe((data) => { this.ordenes = data; console.log(data); });
    }
    crearOrden(orden) {
        this.http.post("/api/ordenes/", {
            nombre: orden.nombre,
            direccion: orden.direccion,
            pago: orden.pago,
            productos: orden.productos,
            embarcado: false
        }).subscribe((r) => {
            console.log(r);
            orden.confirmacionOrden = r;
            orden.carrito.borrar();
            orden.borrar();
        });
    }
    marcarOrden(orden) {
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
    get paginacion() {
        return this.paginacionObject;
    }
    get Filtro() {
        return this.FiltroObject;
    }
};
Repository = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], Repository);
export { Repository };
//# sourceMappingURL=repository.js.map