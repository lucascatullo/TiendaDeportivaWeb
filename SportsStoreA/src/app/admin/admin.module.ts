import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { OverviewComponent } from './overview.component';
import { ProductoAdminComponent } from './productoAdmin.component';
import { OrdenAdminComponent } from './ordenAdmin.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { editorProductosComponent } from './editorProductos.component';



@NgModule({
    imports: [BrowserModule,
        RouterModule,
        FormsModule],
    declarations: [AdminComponent,
        OverviewComponent,
        ProductoAdminComponent,
        editorProductosComponent,
        OrdenAdminComponent]
})


export class AdminModule {}