import { Injectable } from '@angular/core';
import { Repository } from './repository';
import { Carrito } from './carrito.model';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators'


@Injectable()
export class Orden {
    constructor(private repo: Repository, public carrito: Carrito, router: Router) {
        router.events.pipe(filter((evento => evento instanceof NavigationStart)))
            .subscribe(evento => {
                if (router.url.startsWith("/checkout") &&
                    this.nombre != null &&
                    this.direccion != null) {
                    this.repo.guardarDatosSession("checkout", {
                        nombre: this.nombre,
                        direccion: this.direccion,
                        numeroTarjeta: this.pago.numeroTarjeta,
                        vencimientoTarjeta: this.pago.vencimientoTarjeta,
                        codigoSeguridadTarjeta: this.pago.codigoSeguridadTarjeta
                    })
                }
            });
        repo.obtenerDatosSession("checkout").subscribe(data => {
            if (data = ! null) {
                this.nombre = data.nombre;
                this.direccion = data.direccion;
                this.pago.numeroTarjeta = data.numeroTarjeta;
                this.pago.vencimientoTarjeta = data.vencimientoTarjeta;
                this.pago.codigoSeguridadTarjeta = data.codigoSeguridadTarjeta;
            }
        });

        
    }

    ordenId: number;
    nombre: string;
    direccion: string;
    pago: Pago = new Pago();

    presentado: boolean;
    embarcado: boolean;
    confirmacionOrden: ConfirmacionOrden;

    get productos(): LineaCarrito[] {
        return this.carrito.seleccionProducto
            .map(p => new LineaCarrito(p.productoId, p.cantidad))
    }

    borrar() {
        this.nombre = null;
        this.ordenId = null;
        this.direccion = null;
        this.carrito.borrar();
        this.presentado = false;
    }

    presentar() {
        this.presentado = true;
        this.repo.crearOrden(this);
    }

}

export class ConfirmacionOrden {
    constructor(public ordenId: number,
        private codigoAuth: string,
        public precioTotal: number) { }
}


export class Pago {
    numeroTarjeta: string;
    vencimientoTarjeta: string;
    codigoSeguridadTarjeta: string;
}
export class LineaCarrito {
    constructor(private productoId: number, private cantidad: number) {}
}