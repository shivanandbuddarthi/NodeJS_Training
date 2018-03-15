import { Component, OnInit } from '@angular/core';
import { products } from '../data/products.data';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any = products;
  filterText: string = "";
  imgMargin: number = 2;
  imgWidth: number = 20;
  constructor() { }

  ngOnInit() {
  }

}
