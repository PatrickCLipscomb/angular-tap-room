import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { NewKegComponent } from './new-keg.component';
import { EditKegComponent } from './edit-keg.component';
import { LowPintsPipe } from './low-pints.pipe';
import { AlcoholPipe } from './alcohol.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onSelectedKeg'],
  pipes: [LowPintsPipe, AlcoholPipe],
  directives: [KegComponent, NewKegComponent, EditKegComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all">Show All</option>
    <option value="lowPints">Show Low Kegs</option>
    <option value="plentyPints" selected="selected">Show Fullish Kegs</option>
  </select>
  <select (change)="onChangeAlc($event.target.value)" class="filter">
    <option value="all" selected="selected">Show All</option>
    <option value="lowAlc">Show Low Alcohol</option>
    <option value="highAlc">Show High Alcohol</option>
  </select>
  <keg-display *ngFor="#currentKeg of kegList | lowPints:filterPints | alcohol:filterAlcohol"
    [keg]="currentKeg" [pricy]="(currentKeg.price > 5)" (click)="editKeg(currentKeg)">
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
  public filterAlcohol: string = "all";
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
  onChangeAlc(filterOption) {
    this.filterAlcohol = filterOption;
  }
}
