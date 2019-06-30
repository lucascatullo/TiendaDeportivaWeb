import * as tslib_1 from "tslib";
import { Repository } from '../models/repository';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
let tablaProductoComponent = class tablaProductoComponent {
    constructor(repo, router) {
        this.repo = repo;
        this.router = router;
    }
    get productos() {
        return this.repo.productos;
    }
    seleccionarProducto(id) {
        this.repo.getProducto(id);
        this.router.navigateByUrl('/detalles');
    }
};
tablaProductoComponent = tslib_1.__decorate([
    Component({
        selector: "tabla-producto",
        templateUrl: "./tablaProducto.component.html"
    }),
    tslib_1.__metadata("design:paramtypes", [Repository, Router])
], tablaProductoComponent);
export { tablaProductoComponent };
//# sourceMappingURL=tablaProducto.js.map