import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
    selector: 'keg-display',
    inputs: ['keg'],
  template: `
    <div>
      <label>{{keg.brand}}, \${{keg.price}}.00, Alcohol Content: {{keg.alcContent}}, Number of Pints: {{keg.pints}}</label>
      <button type="button">Have a Pint</button>
    </div>
  `
})
export class KegComponent {
  public keg: Keg;
}
