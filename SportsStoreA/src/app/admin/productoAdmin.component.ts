import { Component } from '@angular/core';
import { Repository } from '../models/repository';
import { Producto } from '../models/producto.model';

@Component({
    templateUrl: "productoAdmin.component.html"
})

export class ProductoAdminComponent {

    constructor(private repo: Repository) {

    }

    modoTabla: boolean = true;

    get producto(): Producto {
        return this.repo.producto;
    }

    seleccionarProducto(id: number) {
        this.repo.getProducto(id);
    }

    eliminarProducto(id: number) {
        this.repo.eliminarProducto(id);
    }


    guardarProducto() {
        if (this.repo.producto.productoId == null) {
            this.repo.CrearProducto(this.repo.producto);
        } else {
            this.repo.RemplazarProducto(this.repo.producto);
        }
        this.limpiarProducto();
        this.modoTabla = true;
        
    }

    limpiarProducto() {
        this.repo.producto = new Producto();
        this.modoTabla = true;
    }

    get productos(): Producto[] {
        return this.repo.productos;
    }


}