import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate',
})
export class TranslatePipe implements PipeTransform {
  transform(value: string): unknown {
    // Here you would translate the key
    return `${value} (translated)`;
  }
}
