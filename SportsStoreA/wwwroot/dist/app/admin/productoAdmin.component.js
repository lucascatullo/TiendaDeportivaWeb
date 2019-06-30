import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Repository } from '../models/repository';
import { Producto } from '../models/producto.model';
let ProductoAdminComponent = class ProductoAdminComponent {
    constructor(repo) {
        this.repo = repo;
        this.modoTabla = true;
    }
    get producto() {
        return this.repo.producto;
    }
    seleccionarProducto(id) {
        this.repo.getProducto(id);
    }
    eliminarProducto(id) {
        this.repo.eliminarProducto(id);
    }
    guardarProducto() {
        if (this.repo.producto.productoId == null) {
            this.repo.CrearProducto(this.repo.producto);
        }
        else {
            this.repo.RemplazarProducto(this.repo.producto);
        }
        this.limpiarProducto();
        this.modoTabla = true;
    }
    limpiarProducto() {
        this.repo.producto = new Producto();
        this.modoTabla = true;
    }
    get productos() {
        return this.repo.productos;
    }
};
ProductoAdminComponent = tslib_1.__decorate([
    Component({
        templateUrl: "productoAdmin.component.html"
    }),
    tslib_1.__metadata("design:paramtypes", [Repository])
], ProductoAdminComponent);
export { ProductoAdminComponent };
//# sourceMappingURL=productoAdmin.component.js.map