import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { NewKegComponent } from './new-keg.component';
import { EditKegComponent } from './edit-keg.component';
import { LowPintsPipe } from './low-pints.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onSelectedKeg'],
  pipes: [LowPintsPipe],
  directives: [KegComponent, NewKegComponent, EditKegComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all">Show All</option>
    <option value="lowPints">Show Low Kegs</option>
    <option value="plentyPints">Show Fullish Kegs</option>
  </select>
  <keg-display *ngFor="#currentKeg of kegList | lowPints:filterPints"
    [keg]="currentKeg" (click)="editKeg(currentKeg)" ng-class="(currentKeg.price > 5) ? 'spendy' : 'cheap'">
  </keg-display>
  <edit-keg *ngIf="selectedKeg" [keg]="selectedKeg"></edit-keg>
  <new-keg (onSubmitNewKeg) = "createKeg($event[0], $event[1], $event[2])"></new-keg>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public onSelectedKeg: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterPints: string = "plentyPints";
  constructor() {
    this.onSelectedKeg = new EventEmitter();
  }
  createKeg(brand: string, price: number, alcContent: number): void {
    this.kegList.push(
      new Keg(brand, price, alcContent, 124, this.kegList.length)
    );
  }
  editKeg(clickedKeg: Keg): void {
    this.selectedKeg = clickedKeg;
    this.onSelectedKeg.emit(clickedKeg);
  }
  onChange(filterOption) {
    this.filterPints = filterOption;
  }
}
