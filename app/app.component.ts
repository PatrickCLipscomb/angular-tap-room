import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { KegListComponent } from './keg-list.component';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>Keg List</h1>
      <keg-list [kegList]="kegs"></keg-list>
    </div>
  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("Breakside IPA", 5, .07, 12, 0),
      new Keg("Sculpin IPA", 6, .06, 12, 1),
      new Keg("BudLite", 3, .04, 12, 2)
    ];
  }
}
