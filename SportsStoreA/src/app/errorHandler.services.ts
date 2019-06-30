import { Subject, Observable } from 'rxjs';
import { Injectable } from "@angular/core";


@Injectable()
export class ErrorHandlerService {
    private subject = new Subject<string[]>();

    handleError(error: any) {
        setTimeout(() => {
            if (error instanceof ValidationError) {
                this.subject.next(error.errors);
            } else if (error instanceof Error) {
                this.subject.next([error.message]);
            } else {
                this.subject.next(['Ocurrio un error inesperado']);
            }
        });    
    }

    get errors(): Observable<string[]> {
        return this.subject;
    }

}
export class ValidationError implements Error {

    constructor(public errors: string[]) { }


    name: string;    message: string;
    stack?: string;

  


}   
