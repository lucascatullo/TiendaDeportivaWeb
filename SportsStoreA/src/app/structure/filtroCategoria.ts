import { Component } from "@angular/core";
import { Repository } from '../models/repository';




@Component({
    selector: "filtro-categoria",
    templateUrl: "filtroCategoria.component.html"
})

export class filtroCategoriaComponent {
    constructor(private repo: Repository) { }

    setCategoria(categoria: string) {
        this.repo.Filtro.categoria = categoria;
        this.repo.getProductos();
    }

}