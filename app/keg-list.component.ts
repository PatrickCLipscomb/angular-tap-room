import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  directives: [KegComponent],
  template: `
  <keg-display *ngFor="#currentKeg of kegList"
    [keg]="currentKeg" (click)="drinkPint(currentKeg)">
  </keg-display>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public onSelectedKeg: EventEmitter<Keg>;
  public selectedKeg: Keg;
  constructor() {
    this.onSelectedKeg = new EventEmitter();
  }
  drinkPint(clickedKeg: Keg): void {
    clickedKeg.pints --;
  }
}
