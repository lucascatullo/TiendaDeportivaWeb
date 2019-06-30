import { Component } from '@angular/core';
import { Repository } from '../models/repository';
import { Producto } from '../models/producto.model';
import { Router } from '@angular/router';




@Component({
    selector: "detalles-producto",
    templateUrl: "detallesProducto.component.html"
})

export class detallesProductoComponent {
    constructor(private repo: Repository) {    }




    get producto(): Producto{
        return this.repo.producto;
    }
} 