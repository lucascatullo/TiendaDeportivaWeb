import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Orden } from '../../models/orden.model';

@Component({
    templateUrl:"checkoutpago.component.html"
})

export class CheckoutPagoComponent {
    constructor(private router: Router, public orden: Orden) {
        if (orden.nombre == null || orden.direccion == null) {
            router.navigateByUrl("/checkout/paso1");
        }
    }
}