import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'lodash';

@Pipe({
  name: 'invalidOnes'
})
export class InvalidOnesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string[] {

    return map(value, (val: FormControl, key) => {

      if (val.status === 'INVALID' || val.invalid) {
        return key;
      }

    });

  }

}
