import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";
import { productsArr } from "../data/products.data";
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
    products: Product[] = [];
    private url = "http://localhost:9000/productService";

    constructor(private _http: Http) {

    }

    public getProducts(): Observable<Product[]> {
        return this._http.get(this.url).map(
            (resp) => resp.json()
        );
    }
}