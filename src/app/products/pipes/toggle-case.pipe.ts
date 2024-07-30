import { Pipe, PipeTransform } from '@angular/core';

// roy | toggleCase = 'ROY'
// ROY | toggleCase = 'roy'

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform(value: string, toUpper: boolean = false): string {

    return (toUpper) ? value.toUpperCase() : value.toLowerCase();
  }

}
