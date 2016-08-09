import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
    selector: 'keg-display',
    inputs: ['keg'],
  template: `
    <div>
      <span *ngIf="keg.price > 5" class="spendy">
      <label>{{keg.brand}}, \${{keg.price}}.00, Alcohol Content: {{keg.alcContent}}, Number of Pints: {{keg.pints}}</label>
      </span>
      <span *ngIf="keg.price <= 5" class="cheap">
      <label>{{keg.brand}}, \${{keg.price}}.00, Alcohol Content: {{keg.alcContent}}, Number of Pints: {{keg.pints}}</label>
      </span>
      <button (click)="drinkPint(keg)">Drink Pint</button>
    </div>
  `
})
export class KegComponent {
  public keg: Keg;
  public pricy: boolean;
  drinkPint(keg: Keg) {
    keg.pints --;
  }
  // pricy(keg: Keg) {
  //   if (keg.price > 5) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }
}
