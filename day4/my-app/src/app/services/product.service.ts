import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";
import { productsArr } from "../data/products.data";

@Injectable()
export class ProductService {
    products: Product[] = productsArr;

    public getProducts(): Product[] {
        return this.products;
    }
}