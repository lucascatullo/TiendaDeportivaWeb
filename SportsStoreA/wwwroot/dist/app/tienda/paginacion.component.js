import * as tslib_1 from "tslib";
import { Repository } from '../models/repository';
import { Component } from '@angular/core';
let paginacionComponent = class paginacionComponent {
    constructor(repo) {
        this.repo = repo;
    }
    get paginaActual() {
        return this.repo.paginacion.paginaActual;
    }
    get paginas() {
        if (this.repo.productos != null) {
            return Array(Math.ceil(this.repo.productos.length / this.repo.paginacion.productosPorPagina)).fill(0).map((x, i) => i + 1);
        }
        else {
            return [];
        }
    }
    setPaginaActual(pag) {
        this.repo.paginacion.paginaActual = pag;
    }
};
paginacionComponent = tslib_1.__decorate([
    Component({
        selector: "paginacion",
        templateUrl: "paginacion.component.html"
    }),
    tslib_1.__metadata("design:paramtypes", [Repository])
], paginacionComponent);
export { paginacionComponent };
//# sourceMappingURL=paginacion.component.js.map