import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from './keg.model';

@Pipe({
  name: "alcohol",
  pure: false
})
export class AlcoholPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var alcState = args[0];
    if (alcState === "lowAlc") {
      return input.filter(function(keg) {
        return keg.alcContent <= .05;
      });
    } else if (alcState === "highAlc") {
      return input.filter(function(keg) {
        return keg.alcContent > .05;
      });
    } else {
      return input;
    }
  }
}
