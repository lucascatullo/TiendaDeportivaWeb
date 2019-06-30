import { Repository } from '../models/repository';
import { Component } from '@angular/core';
import { Producto } from '../models/producto.model';
import { Proveedor } from '../models/proveedor.model';


@Component({
    selector: "editor-productos",
    templateUrl:"editorProductos.component.html"
})

export class editorProductosComponent {
    constructor(private repo: Repository) { }


    get producto(): Producto {
        return this.repo.producto;
    } 

    get proveedores(): Proveedor[] {
      return  this.repo.proveedores;
    }

    compararProveedores(p1: Proveedor, p2: Proveedor) {
        return p1 && p2 && p1.nombre == p2.nombre;
    }
}