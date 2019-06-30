import { Repository } from '../models/repository';
import { Producto } from '../models/producto.model';
import { Orden } from '../models/orden.model';
import { Component } from '@angular/core';



@Component({
    templateUrl: "overview.component.html"
})

export class OverviewComponent {
    constructor(private repo: Repository) { }


    get productos(): Producto[] { 
        return this.repo.productos;
    }


    get ordenes(): Orden[] {
        return this.repo.ordenes;
    }

}