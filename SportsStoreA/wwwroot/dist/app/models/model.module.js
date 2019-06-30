import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { Repository } from "./repository";
import { Carrito } from './carrito.model';
import { Orden } from './orden.model';
let ModelModule = class ModelModule {
};
ModelModule = tslib_1.__decorate([
    NgModule({
        providers: [Repository, Carrito, Orden]
    })
], ModelModule);
export { ModelModule };
//# sourceMappingURL=model.module.js.map