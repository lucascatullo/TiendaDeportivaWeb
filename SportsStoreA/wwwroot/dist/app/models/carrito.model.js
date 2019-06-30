import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Repository } from './repository';
let Carrito = class Carrito {
    constructor(repo) {
        this.repo = repo;
        this.seleccionProducto = [];
        this.itemCount = 0;
        this.precioTotal = 0;
        repo.obtenerDatosSession("carrito").subscribe(dataCarrito => {
            if (dataCarrito != null) {
                dataCarrito.map(item => new SeleccionProducto(this, item.productoId, item.nombre, item.precio, item.cantidad)).forEach(item => this.seleccionProducto.push(item));
                this.update(false);
            }
        });
    }
    addProducto(producto) {
        let selec = this.seleccionProducto.find(p => p.productoId == producto.productoId);
        if (selec) {
            selec.cantidad++;
        }
        else {
            this.seleccionProducto.push(new SeleccionProducto(this, producto.productoId, producto.nombre, producto.precio, 1));
        }
        this.update();
    }
    updateCantidad(productoId, cantidad) {
        if (cantidad > 0) {
            let selec = this.seleccionProducto.find(p => p.productoId == productoId);
            if (selec) {
                selec.cantidad = cantidad;
            }
            else {
                let index = this.seleccionProducto.findIndex(p => p.productoId == productoId);
                if (index != 1) {
                    this.seleccionProducto.splice(index, 1);
                }
                this.update();
            }
        }
    }
    borrar() {
        this.seleccionProducto = [];
        this.update();
    }
    update(datosGuardados = true) {
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
                };
            }));
        }
    }
};
Carrito = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [Repository])
], Carrito);
export { Carrito };
export class SeleccionProducto {
    constructor(carrito, productoId, nombre, precio, cantidadV) {
        this.carrito = carrito;
        this.productoId = productoId;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidadV = cantidadV;
    }
    get cantidad() {
        return this.cantidadV;
    }
    set cantidad(ncantidad) {
        this.cantidadV = ncantidad;
        this.carrito.update();
    }
}
//# sourceMappingURL=carrito.model.js.map