import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Orden } from '../../models/orden.model';
let confirmarOrdenComponent = class confirmarOrdenComponent {
    constructor(router, orden) {
        this.router = router;
        this.orden = orden;
        if (!orden.presentado) {
            router.navigateByUrl("checkout/paso3");
        }
    }
};
confirmarOrdenComponent = tslib_1.__decorate([
    Component({
        templateUrl: "confirmarOrden.component.html"
    }),
    tslib_1.__metadata("design:paramtypes", [Router, Orden])
], confirmarOrdenComponent);
export { confirmarOrdenComponent };
//# sourceMappingURL=confirmarOrden.component.js.map