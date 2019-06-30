import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Orden } from '../../models/orden.model';


@Component({
    templateUrl: "checkoutDetalles.component.html"
})
export class CheckoutDetallesComponent {
    constructor(private router: Router, public orden: Orden) {
        if (orden.productos.length == 0) {
            this.router.navigateByUrl("/carrito");
        }
    }

}