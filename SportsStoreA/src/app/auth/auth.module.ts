import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AutenticacionComponent } from './autenticacion.component';
import { AutenticacionService } from './autenticacion.service';
import { AutenticacionGuard } from './autenticacion.guard';



@NgModule({
    imports: [RouterModule, FormsModule, BrowserModule],
    declarations: [AutenticacionComponent],
    providers: [AutenticacionService, AutenticacionGuard],
    exports: [AutenticacionComponent]
})



export class AuthModule {

}