import { Repository } from '../models/repository';
import { Component } from '@angular/core';
import { Carrito } from '../models/carrito.model';



@Component({
    selector: "carrito-sumario",
    templateUrl: "carritoSumario.component.html"
})

export class carritoSumarioComponent {
    constructor(private carrito: Carrito) { }

    get precioTotal(): number {
        return this.carrito.precioTotal;
    }

    get itemCount(): number{
        return this.carrito.itemCount;
    }
}