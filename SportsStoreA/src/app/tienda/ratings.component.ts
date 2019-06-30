import { Component, Input } from '@angular/core';
import { Producto } from '../models/producto.model';
import { count } from 'rxjs/operators';


@Component({
    selector: "ratings",
    templateUrl:"ratings.component.html"
})


export class ratingsComponent {
    @Input()
    producto: Producto;

    get estrellas(): boolean[] {
        if (this.producto != null && this.producto.ratings != null) {
            let total = this.producto.ratings.map(r => r.stars).reduce((
                prev, curr) => prev + curr, 0)
            let contar = Math.round(total / this.producto.ratings.length);
            return Array(5).fill(false).map((value, index) => {
                return index < contar;
            });
        } else {
            return [];
        }
    }
}

