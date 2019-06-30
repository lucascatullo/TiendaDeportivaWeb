import * as tslib_1 from "tslib";
import { Repository } from '../models/repository';
import { Component } from '@angular/core';
let editorProductosComponent = class editorProductosComponent {
    constructor(repo) {
        this.repo = repo;
    }
    get producto() {
        return this.repo.producto;
    }
    get proveedores() {
        return this.repo.proveedores;
    }
    compararProveedores(p1, p2) {
        return p1 && p2 && p1.nombre == p2.nombre;
    }
};
editorProductosComponent = tslib_1.__decorate([
    Component({
        selector: "editor-productos",
        templateUrl: "editorProductos.component.html"
    }),
    tslib_1.__metadata("design:paramtypes", [Repository])
], editorProductosComponent);
export { editorProductosComponent };
//# sourceMappingURL=editorProductos.component.js.map