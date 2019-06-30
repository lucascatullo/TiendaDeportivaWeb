import { Repository } from '../models/repository';
import { Component } from '@angular/core';



@Component({
    selector: "paginacion",
    templateUrl: "paginacion.component.html"
})




export class paginacionComponent {
    constructor(private repo: Repository) { }

    get paginaActual(): number{
        return this.repo.paginacion.paginaActual;
    }

    get paginas(): number[] {
        if (this.repo.productos != null) {
            return Array(Math.ceil(
                this.repo.productos.length / this.repo.paginacion.productosPorPagina
            )).fill(0).map((x, i) => i + 1)
        } else {
            return []
        }
    }

    setPaginaActual(pag: number) {
        this.repo.paginacion.paginaActual = pag;
    }
}