import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AutenticacionService } from './autenticacion.service';
let AutenticacionComponent = class AutenticacionComponent {
    constructor(authServicio) {
        this.authServicio = authServicio;
        this.mostrarError = false;
    }
    login() {
        this.mostrarError = false;
        this.authServicio.login().subscribe(r => {
        });
    }
};
AutenticacionComponent = tslib_1.__decorate([
    Component({
        templateUrl: "autenticacion.component.html"
    }),
    tslib_1.__metadata("design:paramtypes", [AutenticacionService])
], AutenticacionComponent);
export { AutenticacionComponent };
//# sourceMappingURL=autenticacion.component.js.map