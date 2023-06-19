import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Address } from 'src/app/request-pickup/interfaces/address';

@Component({
  selector: 'app-new-address',
  templateUrl: './new-address.component.html',
})
export class NewAddressComponent {
  
  @Input() isOpen: boolean = false;
  @Input() address:Address= {
    address:''
  };
  @Output() newMaterialEvent= new EventEmitter<object>();


  close() {
    this.isOpen = false;
    this.newMaterialEvent.emit(this.address);
    console.log(this.address);
  }
}
