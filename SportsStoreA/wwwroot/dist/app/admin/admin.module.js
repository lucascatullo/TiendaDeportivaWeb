import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { OverviewComponent } from './overview.component';
import { ProductoAdminComponent } from './productoAdmin.component';
import { OrdenAdminComponent } from './ordenAdmin.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { editorProductosComponent } from './editorProductos.component';
let AdminModule = class AdminModule {
};
AdminModule = tslib_1.__decorate([
    NgModule({
        imports: [BrowserModule,
            RouterModule,
            FormsModule],
        declarations: [AdminComponent,
            OverviewComponent,
            ProductoAdminComponent,
            editorProductosComponent,
            OrdenAdminComponent]
    })
], AdminModule);
export { AdminModule };
//# sourceMappingURL=admin.module.js.map