import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";

import { ProductComponent } from './product.component';
import { ProductPipe } from './product.pipe';
import { productRoutes } from './product.routes';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductService } from '../services/product.service';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule.forChild(productRoutes)
  ],
  declarations: [ProductComponent, ProductPipe, ProductDetailsComponent],
  exports: [ProductComponent, ProductPipe],
  providers: [ProductService]
})
export class ProductModule { }
