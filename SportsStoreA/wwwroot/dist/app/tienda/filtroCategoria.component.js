import * as tslib_1 from "tslib";
import { Repository } from '../models/repository';
import { Component } from '@angular/core';
let filtroCategoriaComponent = class filtroCategoriaComponent {
    constructor(repo) {
        this.repo = repo;
    }
    get categorias() {
        return this.repo.categorias;
    }
    get categoriaActual() {
        return this.repo.Filtro.categoria;
    }
    setCategoriaActual(nuevaCategoria) {
        this.repo.Filtro.categoria = nuevaCategoria;
        this.repo.getProductos();
    }
};
filtroCategoriaComponent = tslib_1.__decorate([
    Component({
        selector: "filtro-categoria",
        templateUrl: "filtroCategoria.component.html"
    }),
    tslib_1.__metadata("design:paramtypes", [Repository])
], filtroCategoriaComponent);
export { filtroCategoriaComponent };
//# sourceMappingURL=filtroCategoria.component.js.map