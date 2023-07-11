import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './auth/admin.guard';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './auth/components/dashboard/dashboard.component';
import { InboxComponent } from './auth/components/inbox/inbox.component';
import { ItemComponent } from './auth/components/item/item.component';
import { OrderUpdateComponent } from './auth/components/order-update/order-update.component';
import { OrderComponent } from './auth/components/order/order.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'auth',
    component: AuthComponent,
    canActivateChild: [AdminGuard],
    children: [
      { path: '', redirectTo: 'order', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'inbox', component: InboxComponent },
      { path: 'order', component: OrderComponent },
      { path: 'order/:id', component: OrderUpdateComponent },
      { path: 'item', component: ItemComponent },
      { path: 'item/:id', component: ItemComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
