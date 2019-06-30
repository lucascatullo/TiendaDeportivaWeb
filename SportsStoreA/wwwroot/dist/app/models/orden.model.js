import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Repository } from './repository';
import { Carrito } from './carrito.model';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
let Orden = class Orden {
    constructor(repo, carrito, router) {
        this.repo = repo;
        this.carrito = carrito;
        this.pago = new Pago();
        router.events.pipe(filter((evento => evento instanceof NavigationStart)))
            .subscribe(evento => {
            if (router.url.startsWith("/checkout") &&
                this.nombre != null &&
                this.direccion != null) {
                this.repo.guardarDatosSession("checkout", {
                    nombre: this.nombre,
                    direccion: this.direccion,
                    numeroTarjeta: this.pago.numeroTarjeta,
                    vencimientoTarjeta: this.pago.vencimientoTarjeta,
                    codigoSeguridadTarjeta: this.pago.codigoSeguridadTarjeta
                });
            }
        });
        repo.obtenerDatosSession("checkout").subscribe(data => {
            if (data = !null) {
                this.nombre = data.nombre;
                this.direccion = data.direccion;
                this.pago.numeroTarjeta = data.numeroTarjeta;
                this.pago.vencimientoTarjeta = data.vencimientoTarjeta;
                this.pago.codigoSeguridadTarjeta = data.codigoSeguridadTarjeta;
            }
        });
    }
    get productos() {
        return this.carrito.seleccionProducto
            .map(p => new LineaCarrito(p.productoId, p.cantidad));
    }
    borrar() {
        this.nombre = null;
        this.ordenId = null;
        this.direccion = null;
        this.carrito.borrar();
        this.presentado = false;
    }
    presentar() {
        this.presentado = true;
        this.repo.crearOrden(this);
    }
};
Orden = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [Repository, Carrito, Router])
], Orden);
export { Orden };
export class ConfirmacionOrden {
    constructor(ordenId, codigoAuth, precioTotal) {
        this.ordenId = ordenId;
        this.codigoAuth = codigoAuth;
        this.precioTotal = precioTotal;
    }
}
export class Pago {
}
export class LineaCarrito {
    constructor(productoId, cantidad) {
        this.productoId = productoId;
        this.cantidad = cantidad;
    }
}
//# sourceMappingURL=orden.model.js.map