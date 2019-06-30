import { Component } from '@angular/core';
import { Repository } from '../models/repository';
import { Orden } from '../models/orden.model';

@Component({
    templateUrl:"ordenAdmin.component.html"
})

export class OrdenAdminComponent {
    constructor(private repo: Repository) { }


    get ordenes(): Orden[] {
        return this.repo.ordenes;
    }

    marcarEmbarcado(orden: Orden) {
        this.repo.marcarOrden(orden);
    }

}