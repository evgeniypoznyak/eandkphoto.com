import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'makePretty'
})
export class MakeNamePrettyPipe implements PipeTransform {

  transform(value: any): any {
    if (!value) {
      return null;
    }
    return value
      .split('-')
      .map((value)=> {
          return value
          .charAt(0)
          .toUpperCase() + value.slice(1);
          })
      .join(' ');
  }

}
