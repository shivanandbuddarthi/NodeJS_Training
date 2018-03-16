import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'productFilter'
})
export class ProductPipe implements PipeTransform {

  /* transform(products: any, filterText: string): any {
     return products.filter(function (p) {
       return p.productName.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) > -1;
     });
   }*/


  transform(products: Product[], ...args): any {
    return products !== null && products.length > 0 && args[0] !== null
      ? products.filter(p => p.productName.toLocaleLowerCase().indexOf(args[0].toLocaleLowerCase()) !== -1)
      : products;
  }

}
