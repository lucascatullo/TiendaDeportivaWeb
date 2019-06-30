import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Orden } from '../../models/orden.model';
let CheckoutPagoComponent = class CheckoutPagoComponent {
    constructor(router, orden) {
        this.router = router;
        this.orden = orden;
        if (orden.nombre == null || orden.direccion == null) {
            router.navigateByUrl("/checkout/paso1");
        }
    }
};
CheckoutPagoComponent = tslib_1.__decorate([
    Component({
        templateUrl: "checkoutpago.component.html"
    }),
    tslib_1.__metadata("design:paramtypes", [Router, Orden])
], CheckoutPagoComponent);
export { CheckoutPagoComponent };
//# sourceMappingURL=checkoutPago.component.js.map