import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Orden } from '../../models/orden.model';
let CheckoutDetallesComponent = class CheckoutDetallesComponent {
    constructor(router, orden) {
        this.router = router;
        this.orden = orden;
        if (orden.productos.length == 0) {
            this.router.navigateByUrl("/carrito");
        }
    }
};
CheckoutDetallesComponent = tslib_1.__decorate([
    Component({
        templateUrl: "checkoutDetalles.component.html"
    }),
    tslib_1.__metadata("design:paramtypes", [Router, Orden])
], CheckoutDetallesComponent);
export { CheckoutDetallesComponent };
//# sourceMappingURL=checkoutDetalles.component.js.map