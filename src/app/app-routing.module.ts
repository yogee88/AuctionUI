import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SellerComponent } from './seller/seller.component';
import { ProductBidsComponent } from './product-bids/product-bids.component';
import { BuyerComponent } from './buyer/buyer.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', canActivate:[AuthGuard], component: HomeComponent },
  { path: 'products', canActivate:[AuthGuard], component: SellerComponent },
  { path: 'productbids/:id', canActivate:[AuthGuard], component: ProductBidsComponent },
  { path: 'buyer', canActivate:[AuthGuard], component: BuyerComponent },
  { path: 'login', component: LoginComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
