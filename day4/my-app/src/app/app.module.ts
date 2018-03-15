import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";

import { ProductModule } from "./product/product.module";
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { appRoutes } from "./app.route";


@NgModule({
    imports: [BrowserModule, FormsModule, ProductModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, HomeComponent, PageNotFoundComponent],
    bootstrap: [AppComponent],
})
export class AppModule {

}