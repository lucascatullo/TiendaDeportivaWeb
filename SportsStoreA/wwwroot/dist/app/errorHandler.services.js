import * as tslib_1 from "tslib";
import { Subject } from 'rxjs';
import { Injectable } from "@angular/core";
let ErrorHandlerService = class ErrorHandlerService {
    constructor() {
        this.subject = new Subject();
    }
    handleError(error) {
        setTimeout(() => {
            if (error instanceof ValidationError) {
                this.subject.next(error.errors);
            }
            else if (error instanceof Error) {
                this.subject.next([error.message]);
            }
            else {
                this.subject.next(['Ocurrio un error inesperado']);
            }
        });
    }
    get errors() {
        return this.subject;
    }
};
ErrorHandlerService = tslib_1.__decorate([
    Injectable()
], ErrorHandlerService);
export { ErrorHandlerService };
export class ValidationError {
    constructor(errors) {
        this.errors = errors;
    }
}
//# sourceMappingURL=errorHandler.services.js.map