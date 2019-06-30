import { Component } from '@angular/core';
import { AutenticacionService } from './autenticacion.service';


@Component({
    templateUrl: "autenticacion.component.html"
})

export class AutenticacionComponent {
    constructor(public authServicio: AutenticacionService) { }

    mostrarError: boolean = false;

    login() {
        this.mostrarError = false;
        this.authServicio.login().subscribe(r => {
            
        });
    }
}