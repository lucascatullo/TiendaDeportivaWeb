import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Orden } from '../../models/orden.model';

@Component({
    templateUrl: "checkoutSumario.component.html"
})

export class checkoutSumarioComponent {
    constructor(private router: Router, public orden: Orden) {
        if (orden.pago.numeroTarjeta == null || orden.pago.codigoSeguridadTarjeta == null
            || orden.pago.vencimientoTarjeta == null) {
            router.navigateByUrl("checkout/step2");
        }
    }
    presentarOrden() {
        this.orden.presentar();
        this.router.navigateByUrl("checkout/confirmacion");
    }
}