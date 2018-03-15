import { Routes } from "@angular/router";
import { ProductComponent } from "./product.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";

export const productRoutes: Routes = [
    { path: "products", component: ProductComponent, pathMatch: "full" },
    { path: "products/:pid", component: ProductDetailsComponent }
];