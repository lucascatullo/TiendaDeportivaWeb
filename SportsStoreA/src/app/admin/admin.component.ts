import { Repository } from '../models/repository';
import { Component } from '@angular/core';
import { AutenticacionService } from '../auth/autenticacion.service';

@Component({
    templateUrl: "admin.component.html"
})


export class AdminComponent {
    constructor(private repo: Repository, public authService: AutenticacionService) {
        repo.Filtro.reset();
        repo.Filtro.relacionado = true;
        this.repo.getProductos();
        this.repo.getProveedores();
        this.repo.getOrdenes();
    }
}