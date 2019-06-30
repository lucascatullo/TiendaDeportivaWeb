import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AutenticacionComponent } from './autenticacion.component';
import { AutenticacionService } from './autenticacion.service';
import { AutenticacionGuard } from './autenticacion.guard';
let AuthModule = class AuthModule {
};
AuthModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule, FormsModule, BrowserModule],
        declarations: [AutenticacionComponent],
        providers: [AutenticacionService, AutenticacionGuard],
        exports: [AutenticacionComponent]
    })
], AuthModule);
export { AuthModule };
//# sourceMappingURL=auth.module.js.map