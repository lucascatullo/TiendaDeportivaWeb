import { Component } from '@angular/core';
import { ErrorHandlerService } from './errorHandler.services';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    private ultimoError: string[];


    constructor(errorHandler: ErrorHandlerService) {
        errorHandler.errors.subscribe(e => {
            this.ultimoError = e;
        });
    }

    get error(): string[] {
        return this.ultimoError;
    }

    limpiarError() {
        this.ultimoError = null;
    }
}
    




