import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'month'
})
export class CleanMonthPipe implements PipeTransform {

  transform(value: any): any {
    if (!value) {
      return null;
    }
    return value.split('-').slice(1);
  }

}
