import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { SingelProductComponent } from './products-list/single-product/single-product.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { MaterialModule } from '../shared/material.module';




@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    SingelProductComponent,
    CartComponent,
    CheckoutComponent,
    AddNewProductComponent
  ],
  exports: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ProductsModule { }
