import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AutenticacionService } from './autenticacion.service';


@Injectable()
export class AutenticacionGuard {
    constructor(private router: Router,
        private authService: AutenticacionService) { }

    canActivateChildren(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if (this.authService.autenticado) {
            return true;
        } else {
            this.authService.callBackUrl = "/admin/" + route.url.toString();
            this.router.navigateByUrl("/login");
            return false;
        }
        
    }

}