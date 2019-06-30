import { Injectable } from "@angular/core";
import { Repository } from "../models/repository";
import { Router } from "@angular/router";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';




@Injectable()
export class AutenticacionService {
    constructor(private repo: Repository, private router: Router) { }


    autenticado: boolean = false;
    nombre: string;
    password: string;
    callBackUrl: string;

    login(): Observable<boolean> {
        this.autenticado = false;
        
        return this.repo.login(this.nombre, this.password)
            .pipe(map((res: HttpResponse<any>) => {
                console.log(res.ok);
                if (res.ok) {
                   
                    this.autenticado = true;
                    console.log(this.autenticado);
                    this.nombre = null;
                    this.password = null;
                    this.router.navigateByUrl("/admin");
                    return this.autenticado;
                }
                this.router.navigateByUrl("/login");
                return this.autenticado
            
        }));
    }

    logout() {
        this.autenticado = false;
        this.repo.logout();
        this.router.navigateByUrl("/login");
    }

}