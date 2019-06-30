import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Carrito } from '../models/carrito.model';
let carritoSumarioComponent = class carritoSumarioComponent {
    constructor(carrito) {
        this.carrito = carrito;
    }
    get precioTotal() {
        return this.carrito.precioTotal;
    }
    get itemCount() {
        return this.carrito.itemCount;
    }
};
carritoSumarioComponent = tslib_1.__decorate([
    Component({
        selector: "carrito-sumario",
        templateUrl: "carritoSumario.component.html"
    }),
    tslib_1.__metadata("design:paramtypes", [Carrito])
], carritoSumarioComponent);
export { carritoSumarioComponent };
//# sourceMappingURL=carritoSumario.component.js.map