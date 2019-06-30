import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler} from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ModelModule } from "src/app/models/model.module";
import { routerConfig } from 'src/app/app-routing.module';
import { tiendaModule } from './tienda/tienda.module';
import { AdminModule } from './admin/admin.module';
import { ErrorHandlerService } from './errorHandler.services';
import { AuthModule } from './auth/auth.module';

const eHandler = new ErrorHandlerService();

export function Handler() {
    return eHandler;
}

@NgModule({
    declarations:
        [AppComponent],
    imports:
        [BrowserModule,
        FormsModule,
        ModelModule,
        HttpClientModule,
        tiendaModule,
        AdminModule,
        AuthModule,
        routerConfig],
    providers: [
        { provide: ErrorHandlerService, useFactory: Handler },
        { provide: ErrorHandler, useFactory: Handler }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }