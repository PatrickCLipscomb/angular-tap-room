import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div>
    <h3>Add a Keg</h3>
    <input placeholder="Beer Name" class="input-lg" #newBrand>
    <input placeholder="Price per pint" type="number" class="input-lg" #newPrice>
    <input placeholder="Alcohol content" type="number" class="input-lg" #newAlcContent>
    <button (click)="addKeg(newBrand, newPrice, newAlcContent)" class="btn-success btn-lg">Add</button>
  </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter()
  }
  addKeg(userBrand: HTMLInputElement, userPrice: HTMLInputElement, userAlcContent: HTMLInputElement){
    this.onSubmitNewKeg.emit([userBrand.value, userPrice.value, userAlcContent.value]);
    userBrand.value="";
    userPrice.value="";
    userAlcContent.value="";
  }
}
