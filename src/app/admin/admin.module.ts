import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './auth/components/dashboard/dashboard.component';
import { InboxComponent } from './auth/components/inbox/inbox.component';
import { OrderComponent } from './auth/components/order/order.component';
import { SidenavComponent } from './auth/layouts/sidenav/sidenav.component';
import { HeaderComponent } from './auth/layouts/header/header.component';
import { ItemComponent } from './auth/components/item/item.component';
import { SharedModule } from './auth/shared/shared.module';
import { LoginService } from './login/login.service';
import { AdminGuard } from './auth/admin.guard';
import { OrderUpdateComponent } from './auth/components/order-update/order-update.component';

@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent,
    DashboardComponent,
    InboxComponent,
    OrderComponent,
    SidenavComponent,
    HeaderComponent,
    ItemComponent,
    OrderUpdateComponent,
  ],
  imports: [CommonModule, SharedModule, AdminRoutingModule],
  providers: [LoginService, AdminGuard],
})
export class AdminModule {}
