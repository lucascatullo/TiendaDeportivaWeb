import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Repository } from "../models/repository";
import { Router } from "@angular/router";
import { map } from 'rxjs/operators';
let AutenticacionService = class AutenticacionService {
    constructor(repo, router) {
        this.repo = repo;
        this.router = router;
        this.autenticado = false;
    }
    login() {
        this.autenticado = false;
        return this.repo.login(this.nombre, this.password)
            .pipe(map((res) => {
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
            return this.autenticado;
        }));
    }
    logout() {
        this.autenticado = false;
        this.repo.logout();
        this.router.navigateByUrl("/login");
    }
};
AutenticacionService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [Repository, Router])
], AutenticacionService);
export { AutenticacionService };
//# sourceMappingURL=autenticacion.service.js.map