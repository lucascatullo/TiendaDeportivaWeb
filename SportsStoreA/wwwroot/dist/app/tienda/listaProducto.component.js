import * as tslib_1 from "tslib";
import { Repository } from '../models/repository';
import { Component } from '@angular/core';
import { Carrito } from '../models/carrito.model';
let listaProductoComponent = class listaProductoComponent {
    constructor(repo, carrito) {
        this.repo = repo;
        this.carrito = carrito;
    }
    get productos() {
        if (this.repo.productos != null && this.repo.productos.length > 1) {
            let paginaIndex = (this.repo.paginacion.paginaActual - 1)
                * this.repo.paginacion.productosPorPagina;
            return this.repo.productos.slice(paginaIndex, paginaIndex + this.repo.paginacion.productosPorPagina);
        }
    }
    addCarrito(producto) {
        this.carrito.addProducto(producto);
        console.log(this.carrito);
    }
};
listaProductoComponent = tslib_1.__decorate([
    Component({
        selector: "lista-producto",
        templateUrl: "listaProducto.component.html"
    }),
    tslib_1.__metadata("design:paramtypes", [Repository, Carrito])
], listaProductoComponent);
export { listaProductoComponent };
//# sourceMappingURL=listaProducto.component.js.map