import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from './autenticacion.service';
let AutenticacionGuard = class AutenticacionGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivateChildren(route, state) {
        if (this.authService.autenticado) {
            return true;
        }
        else {
            this.authService.callBackUrl = "/admin/" + route.url.toString();
            this.router.navigateByUrl("/login");
            return false;
        }
    }
};
AutenticacionGuard = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [Router,
        AutenticacionService])
], AutenticacionGuard);
export { AutenticacionGuard };
//# sourceMappingURL=autenticacion.guard.js.map