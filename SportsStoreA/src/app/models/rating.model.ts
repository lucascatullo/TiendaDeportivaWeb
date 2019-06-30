import { Producto } from "./producto.model";

export class Rating {
    constructor(
        public ratingId?: number,
        public stars?: number,
        public producto?: Producto
    ) {}
}