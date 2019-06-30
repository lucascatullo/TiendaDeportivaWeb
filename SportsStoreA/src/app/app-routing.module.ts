import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { selectorProductoComponent } from './tienda/selectorProducto.component';
import { detallesCarritoComponent } from './tienda/detallesCarrito.component';
import { CheckoutDetallesComponent } from './tienda/checkout/checkoutDetalles.component';
import { CheckoutPagoComponent } from './tienda/checkout/checkoutPago.component';
import { checkoutSumarioComponent } from './tienda/checkout/checkoutSumario.component';
import { confirmarOrdenComponent } from './tienda/checkout/confirmarOrden.component';
import { AdminComponent } from './admin/admin.component';
import { ProductoAdminComponent } from './admin/productoAdmin.component';
import { OrdenAdminComponent } from './admin/ordenAdmin.component';
import { OverviewComponent } from './admin/overview.component';
import { AutenticacionGuard } from './auth/autenticacion.guard';
import { AutenticacionComponent } from './auth/autenticacion.component';


const routes: Routes = [
    { path: "login", component: AutenticacionComponent },
    { path: "admin", redirectTo: "admin/overview", pathMatch:"full" },
    {
        path: "admin", component: AdminComponent,
        canActivateChild: [AutenticacionGuard],
        children: [
            { path: "productos", component: ProductoAdminComponent },
            { path: "ordenes", component: OrdenAdminComponent },
            { path: "overview", component: OverviewComponent },
            { path: "", component: OverviewComponent }
        ]
    },
    { path: "checkout/paso1", component: CheckoutDetallesComponent },
    { path: "checkout/paso2", component: CheckoutPagoComponent },
    { path: "checkout/paso3", component: checkoutSumarioComponent },
    { path: "checkout/confirmacion", component: confirmarOrdenComponent },
    { path: "carrito", component: detallesCarritoComponent },
    { path: "tienda", component: selectorProductoComponent },
    { path: "", component: selectorProductoComponent }
];

export const routerConfig = RouterModule.forRoot(routes);

@NgModule({
    imports: [routerConfig],
    exports: [RouterModule]
})
export class AppRoutingModule { }
