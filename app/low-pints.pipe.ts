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
        return keg.pints < 10;
      });
    } else if (pintState === "plentyPints") {
      return input.filter(function(keg) {
        return keg.pints >= 10;
      });
    } else {
      return input;
    }
  }
}
