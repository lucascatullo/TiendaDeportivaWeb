import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Repository } from '../models/repository';
let filtroCategoriaComponent = class filtroCategoriaComponent {
    constructor(repo) {
        this.repo = repo;
    }
    setCategoria(categoria) {
        this.repo.Filtro.categoria = categoria;
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
//# sourceMappingURL=filtroCategoria.js.map