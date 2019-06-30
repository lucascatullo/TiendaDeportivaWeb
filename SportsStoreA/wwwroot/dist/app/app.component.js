import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ErrorHandlerService } from './errorHandler.services';
let AppComponent = class AppComponent {
    constructor(errorHandler) {
        errorHandler.errors.subscribe(e => {
            this.ultimoError = e;
        });
    }
    get error() {
        return this.ultimoError;
    }
    limpiarError() {
        this.ultimoError = null;
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [ErrorHandlerService])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map