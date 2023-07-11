import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './user.component';
import { ShopComponent } from './components/shop/shop.component';
import { TrackComponent } from './components/track/track.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductComponent } from './components/product/product.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { PaidComponent } from './components/paid/paid.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'shop/:brand', component: ShopComponent },
      { path: 'track', component: TrackComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'shop/product/:id', component: ProductComponent },
      { path: 'checkout', component: CheckOutComponent },
      { path: 'paid', component: PaidComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
