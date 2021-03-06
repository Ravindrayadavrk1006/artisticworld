import { ShoppingCartService } from './shopping-cart.service';
import { ProductService } from './product.service';
import { CategoryService } from './category.service';
import { AdminAuthGuardService as AdminAuthGuard } from './admin-auth-guard.service';
import { UserService } from './user.service';
import { AuthGuardService as AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { CustomFormsModule } from 'ng2-validation'
// import { LoginComponent } from './login/login.component';
// import {FormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../environments/environment';
import {RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { FormsModule } from '@angular/forms';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductSpecificationComponent } from './product-specification/product-specification.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductSpecificationComponent
  ],
  imports: [
    AngularFireAuthModule,
    FormsModule,
    CustomFormsModule, 
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {path:'',component:ProductsComponent},
      {path:'login',component:LoginComponent},
      {path:'my/orders',component:MyOrdersComponent},
      {path:'products',component:ProductsComponent},
      {path:'shopping-cart',component:ShoppingCartComponent},
      {path:'check-out',component:CheckOutComponent,canActivate:[AuthGuard]},
      {path:'order-success',component:OrderSuccessComponent},
      // for admin
      {path:'admin/products/new',component:ProductFormComponent,canActivate:[AdminAuthGuard]},
      {path:'admin/products/:id',component:ProductFormComponent,canActivate:[AdminAuthGuard]},
      {path:'admin/products',component:AdminProductsComponent,canActivate:[AdminAuthGuard]},
      {path:'admin/orders',component:AdminOrdersComponent,canActivate:[AdminAuthGuard]},
      
    ])
  ],
  providers: [
              ShoppingCartService,
              AngularFireAuth,
              AuthService,
              AuthGuard,
              UserService,
              AdminAuthGuard,
              CategoryService,
              ProductService,
             
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
