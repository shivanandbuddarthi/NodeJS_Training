import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  filterText: string = "";
  imgMargin: number = 2;
  imgWidth: number = 20;
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getProducts()
      .subscribe(
        (data) => this.products = data
      );
  }

}
