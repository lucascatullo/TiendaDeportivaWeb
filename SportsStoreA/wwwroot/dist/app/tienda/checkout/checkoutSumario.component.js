import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Orden } from '../../models/orden.model';
let checkoutSumarioComponent = class checkoutSumarioComponent {
    constructor(router, orden) {
        this.router = router;
        this.orden = orden;
        if (orden.pago.numeroTarjeta == null || orden.pago.codigoSeguridadTarjeta == null
            || orden.pago.vencimientoTarjeta == null) {
            router.navigateByUrl("checkout/step2");
        }
    }
    presentarOrden() {
        this.orden.presentar();
        this.router.navigateByUrl("checkout/confirmacion");
    }
};
checkoutSumarioComponent = tslib_1.__decorate([
    Component({
        templateUrl: "checkoutSumario.component.html"
    }),
    tslib_1.__metadata("design:paramtypes", [Router, Orden])
], checkoutSumarioComponent);
export { checkoutSumarioComponent };
//# sourceMappingURL=checkoutSumario.component.js.map