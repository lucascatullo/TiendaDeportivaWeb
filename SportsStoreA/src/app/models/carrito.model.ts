import { Injectable } from "@angular/core";
import { Producto } from './producto.model';
import { Repository } from './repository';

@Injectable()
export class Carrito {

    seleccionProducto: SeleccionProducto[] = []
    itemCount = 0; 
    precioTotal = 0; 

    constructor(private repo: Repository) {
        repo.obtenerDatosSession("carrito").subscribe(dataCarrito => {
            if (dataCarrito != null) {

                dataCarrito.map(item =>
                    new SeleccionProducto(this,
                        item.productoId,
                        item.nombre,
                        item.precio,
                        item.cantidad)).forEach(item => this.seleccionProducto.push(item));
           
                this.update(false);
            }
        });
    }

    addProducto(producto: Producto) {
        let selec = this.seleccionProducto.find(p => p.productoId == producto.productoId);
        if (selec) {
            selec.cantidad++;
        } else {
            this.seleccionProducto.push(new SeleccionProducto(this,
                producto.productoId,
                producto.nombre,
                producto.precio, 1));
        }
        this.update();
    }

    updateCantidad(productoId: number, cantidad: number) {
        if (cantidad > 0) {
            let selec = this.seleccionProducto.find(p => p.productoId == productoId);
            if (selec) {
                selec.cantidad = cantidad;
            } else {
                let index = this.seleccionProducto.findIndex(p => p.productoId == productoId);
                if (index != 1) {
                    this.seleccionProducto.splice(index, 1);
                }
                this.update()
            }
        }
    }

    borrar() {
        this.seleccionProducto = [];
        this.update();
    }

    update(datosGuardados: boolean = true) {
        this.itemCount = this.seleccionProducto
            .map(s => s.cantidad)
            .reduce((prev, cur) => prev + cur, 0);
        this.precioTotal = this.seleccionProducto.map(ps => ps.precio * ps.cantidad)
            .reduce((prev, curr) => prev + curr, 0);
        console.log(this.seleccionProducto);
        if (datosGuardados) {
            return this.repo.guardarDatosSession("carrito", this.seleccionProducto
                .map(s => {
                    return {
                        productoId: s.productoId, nombre: s.nombre,
                        precio: s.precio, cantidad: s.cantidad
                    }
                }));
        }
     
    }
}
export class SeleccionProducto {
    constructor(public carrito: Carrito,
        public productoId?: number,
        public nombre?: string,
        public precio?: number,
        private cantidadV?: number) { }

    get cantidad() {
        return this.cantidadV;
    }

    set cantidad(ncantidad: number) {
        this.cantidadV = ncantidad;
        this.carrito.update();
    }
}
