import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Orden } from '../../models/orden.model';


@Component({
    templateUrl: "confirmarOrden.component.html"
})

export class confirmarOrdenComponent {
    constructor(private router: Router, public orden: Orden) {
        if (!orden.presentado) {
            router.navigateByUrl("checkout/paso3");
        }
    }
}