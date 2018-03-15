import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductPipe implements PipeTransform {

  transform(products: any, filterText: string): any {
    return products.filter(function (p) {
      return p.productName.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) > -1;
    });
  }

}
