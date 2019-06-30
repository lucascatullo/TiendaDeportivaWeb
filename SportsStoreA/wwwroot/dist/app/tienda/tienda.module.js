import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { carritoSumarioComponent } from './carritoSumario.component';
import { filtroCategoriaComponent } from './filtroCategoria.component';
import { listaProductoComponent } from './listaProducto.component';
import { paginacionComponent } from './paginacion.component';
import { ratingsComponent } from './ratings.component';
import { selectorProductoComponent } from './selectorProducto.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { detallesCarritoComponent } from './detallesCarrito.component';
import { checkoutSumarioComponent } from './checkout/checkoutSumario.component';
import { CheckoutDetallesComponent } from './checkout/checkoutDetalles.component';
import { CheckoutPagoComponent } from './checkout/checkoutPago.component';
import { confirmarOrdenComponent } from './checkout/confirmarOrden.component';
let tiendaModule = class tiendaModule {
};
tiendaModule = tslib_1.__decorate([
    NgModule({
        declarations: [carritoSumarioComponent,
            filtroCategoriaComponent,
            listaProductoComponent,
            paginacionComponent,
            ratingsComponent,
            confirmarOrdenComponent,
            selectorProductoComponent,
            detallesCarritoComponent,
            CheckoutPagoComponent,
            checkoutSumarioComponent,
            CheckoutDetallesComponent],
        imports: [BrowserModule, RouterModule, FormsModule],
        exports: [selectorProductoComponent]
    })
], tiendaModule);
export { tiendaModule };
//# sourceMappingURL=tienda.module.js.map