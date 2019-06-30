import { Proveedor } from "./proveedor.model";
import { Rating } from "./rating.model";

export class Producto {
    constructor(
        public productoId?: number, public nombre?: string, public categoria?: string,
        public descripcion?: string, public precio?: number, public proveedor?: Proveedor,
        public ratings?: Rating[]) {}
}