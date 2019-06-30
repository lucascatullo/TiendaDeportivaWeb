import { Repository } from '../models/repository';
import { Producto } from '../models/producto.model';
import { Component } from '@angular/core';
import { Carrito } from '../models/carrito.model';



@Component({
    selector: "lista-producto",
    templateUrl: "listaProducto.component.html"
})

export class listaProductoComponent {
    constructor(private repo: Repository, private carrito: Carrito) { }

    get productos(): Producto[] {
        if (this.repo.productos != null && this.repo.productos.length > 1) {
            let paginaIndex = (this.repo.paginacion.paginaActual - 1)
                * this.repo.paginacion.productosPorPagina;
            return this.repo.productos.slice(paginaIndex, paginaIndex + this.repo.paginacion.productosPorPagina);
        }
    }

    addCarrito(producto: Producto) {
        this.carrito.addProducto(producto);
        console.log(this.carrito);
    }
}