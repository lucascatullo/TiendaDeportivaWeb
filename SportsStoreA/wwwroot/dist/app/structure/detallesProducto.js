import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Repository } from '../models/repository';
let detallesProductoComponent = class detallesProductoComponent {
    constructor(repo) {
        this.repo = repo;
    }
    get producto() {
        return this.repo.producto;
    }
};
detallesProductoComponent = tslib_1.__decorate([
    Component({
        selector: "detalles-producto",
        templateUrl: "detallesProducto.component.html"
    }),
    tslib_1.__metadata("design:paramtypes", [Repository])
], detallesProductoComponent);
export { detallesProductoComponent };
//# sourceMappingURL=detallesProducto.js.map