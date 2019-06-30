import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Carrito } from '../models/carrito.model';
let detallesCarritoComponent = class detallesCarritoComponent {
    constructor(carrito) {
        this.carrito = carrito;
    }
};
detallesCarritoComponent = tslib_1.__decorate([
    Component({
        templateUrl: "detallesCarrito.component.html"
    }),
    tslib_1.__metadata("design:paramtypes", [Carrito])
], detallesCarritoComponent);
export { detallesCarritoComponent };
//# sourceMappingURL=detallesCarrito.component.js.map