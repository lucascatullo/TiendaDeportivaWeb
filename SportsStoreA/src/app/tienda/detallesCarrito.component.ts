import { Component } from "@angular/core";
import { Carrito } from '../models/carrito.model';



@Component({
    templateUrl: "detallesCarrito.component.html"
})

export class detallesCarritoComponent {
    constructor(public carrito: Carrito) { }


}