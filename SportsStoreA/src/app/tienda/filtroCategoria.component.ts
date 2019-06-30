import { Repository } from '../models/repository';
import { Component } from '@angular/core';


@Component({
    selector: "filtro-categoria",
    templateUrl: "filtroCategoria.component.html"
})

export class filtroCategoriaComponent {
    constructor(private repo: Repository) { }

    get categorias(): string[] {
        return this.repo.categorias;
    }

    get categoriaActual(): string {
        return this.repo.Filtro.categoria;
    } 

    setCategoriaActual(nuevaCategoria: string) {
        this.repo.Filtro.categoria = nuevaCategoria;
        this.repo.getProductos();
    }
}