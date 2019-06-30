import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Producto } from '../models/producto.model';
let ratingsComponent = class ratingsComponent {
    get estrellas() {
        if (this.producto != null && this.producto.ratings != null) {
            let total = this.producto.ratings.map(r => r.stars).reduce((prev, curr) => prev + curr, 0);
            let contar = Math.round(total / this.producto.ratings.length);
            return Array(5).fill(false).map((value, index) => {
                return index < contar;
            });
        }
        else {
            return [];
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Producto)
], ratingsComponent.prototype, "producto", void 0);
ratingsComponent = tslib_1.__decorate([
    Component({
        selector: "ratings",
        templateUrl: "ratings.component.html"
    })
], ratingsComponent);
export { ratingsComponent };
//# sourceMappingURL=ratings.component.js.map