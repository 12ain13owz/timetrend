import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { DragScrollModule } from 'ngx-drag-scroll';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { TrackComponent } from './components/track/track.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidenavComponent } from './layouts/sidenav/sidenav.component';
import { ScrollTopComponent } from './layouts/scroll-top/scroll-top.component';
import { ProductComponent } from './components/product/product.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { NocartComponent } from './components/check-out/nocart/nocart.component';
import { PaidComponent } from './components/paid/paid.component';

@NgModule({
  declarations: [
    UserComponent,
    HomeComponent,
    ShopComponent,
    TrackComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    ScrollTopComponent,
    ProductComponent,
    CheckOutComponent,
    NocartComponent,
    PaidComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
    MatCarouselModule.forRoot(),
    DragScrollModule,
  ],
})
export class UserModule {}
