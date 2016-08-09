import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from './keg.model';

@Pipe({
  name: "lowPints",
  pure: false
})
export class LowPintsPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var pintState = args[0];
    if (pintState === "lowPints") {
      return input.filter(function(keg) {
        if (keg.pints < 10 ) {
          return keg;
        }
      });
    } else if (pintState === "plentyPints") {
      return input.filter(function(keg) {
        if (keg.pints >= 10) {
          return keg;
        }
      });
    } else {
      return input;
    }
  }
}
