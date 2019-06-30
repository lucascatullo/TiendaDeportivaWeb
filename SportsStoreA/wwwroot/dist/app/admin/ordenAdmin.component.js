import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Repository } from '../models/repository';
let OrdenAdminComponent = class OrdenAdminComponent {
    constructor(repo) {
        this.repo = repo;
    }
    get ordenes() {
        return this.repo.ordenes;
    }
    marcarEmbarcado(orden) {
        this.repo.marcarOrden(orden);
    }
};
OrdenAdminComponent = tslib_1.__decorate([
    Component({
        templateUrl: "ordenAdmin.component.html"
    }),
    tslib_1.__metadata("design:paramtypes", [Repository])
], OrdenAdminComponent);
export { OrdenAdminComponent };
//# sourceMappingURL=ordenAdmin.component.js.map