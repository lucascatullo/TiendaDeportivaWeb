export class Filtro {
    categoria?: string;
    busqueda?: string;
    relacionado: boolean = false;

    reset() {
        this.categoria = this.busqueda = null;
        this.relacionado = false;
    }
}

export class Paginacion {
    productosPorPagina: number = 4;
    paginaActual: number = 1; 
}