import { NgModule } from '@angular/core';
import { Repository } from "./repository";
import { Carrito } from './carrito.model';
import { Orden } from './orden.model';


@NgModule({
    providers: [Repository, Carrito, Orden]
})

export class ModelModule { }