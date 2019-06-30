import { Repository } from '../models/repository';
import { Component } from '@angular/core';
import { Producto } from '../models/producto.model';
import { Router } from '@angular/router';



@Component({
    selector: "tabla-producto",
    templateUrl: "./tablaProducto.component.html"
})

export class tablaProductoComponent {
    constructor(private repo: Repository, private router: Router) { }

    get productos(): Producto[] {
        return this.repo.productos;
    }

    seleccionarProducto(id: number) {
        this.repo.getProducto(id);
        this.router.navigateByUrl('/detalles');
    }
}