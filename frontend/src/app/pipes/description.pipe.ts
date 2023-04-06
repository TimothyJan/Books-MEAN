import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description'
})
export class DescriptionPipe implements PipeTransform {

  transform(value: string): string {
    let newVal = value
      .replace('<p>', '').replace('</p>', '')
      .replace('<b>', '').replace('</b>', '')
      .replace('<i>', '').replace('</i>', '');
    return newVal
  }

}
