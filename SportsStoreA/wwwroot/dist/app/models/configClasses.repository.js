export class Filtro {
    constructor() {
        this.relacionado = false;
    }
    reset() {
        this.categoria = this.busqueda = null;
        this.relacionado = false;
    }
}
export class Paginacion {
    constructor() {
        this.productosPorPagina = 4;
        this.paginaActual = 1;
    }
}
//# sourceMappingURL=configClasses.repository.js.map