import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'edit-keg',
  inputs: ['keg'],
  template: `
  <div class="form-group">
    <h3>Edit Keg Details</h3>
    <input [(ngModel)]="keg.brand" class="col-sm-8 input-lg form-control"/>
    <input [(ngModel)]="keg.price" class="col-sm-8 input-lg form-control"/>
    <input [(ngModel)]="keg.alcContent" class="col-sm-8 input-lg form-control"/>
  </div>
  `
})
export class EditKegComponent {
  public keg: Keg;
}
