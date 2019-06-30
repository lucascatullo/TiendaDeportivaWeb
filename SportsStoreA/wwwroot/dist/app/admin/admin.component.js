import * as tslib_1 from "tslib";
import { Repository } from '../models/repository';
import { Component } from '@angular/core';
import { AutenticacionService } from '../auth/autenticacion.service';
let AdminComponent = class AdminComponent {
    constructor(repo, authService) {
        this.repo = repo;
        this.authService = authService;
        repo.Filtro.reset();
        repo.Filtro.relacionado = true;
        this.repo.getProductos();
        this.repo.getProveedores();
        this.repo.getOrdenes();
    }
};
AdminComponent = tslib_1.__decorate([
    Component({
        templateUrl: "admin.component.html"
    }),
    tslib_1.__metadata("design:paramtypes", [Repository, AutenticacionService])
], AdminComponent);
export { AdminComponent };
//# sourceMappingURL=admin.component.js.map