import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { products } from '../../data/products.data';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: any = {};
  products: any = {};
  productId: number;

  constructor(private _activatedRouter: ActivatedRoute, private _router: Router) {

  }

  ngOnInit() {
    this.products = products;
    this._activatedRouter.params.subscribe((paramsData: Params) => {
      try {
        this.productId = parseInt(paramsData["pid"]);
      }
      catch (err) {
      }
      this.products.forEach(p => {
        if (this.productId && p.productId === this.productId)
          this.product = p;
      });
    });
  }


  goBack(): void {
    this._router.navigate(['/products']);
  }

}
