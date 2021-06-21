import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from 'src/app/models/customer';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(customers: Customer[], keyword: string): Customer[] {
    if (!customers || !keyword) {
      return customers;
    }

    return customers.filter(customer =>
       customer.name.toLowerCase().includes(keyword.toLowerCase()));
  }
}
