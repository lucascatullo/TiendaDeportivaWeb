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




@NgModule({
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

export class tiendaModule{}