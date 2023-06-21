import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Address } from 'src/app/request-pickup/interfaces/address';

@Component({
  selector: 'app-new-address',
  templateUrl: './new-address.component.html',
})
export class NewAddressComponent {
  
  @Input() isOpen: boolean = false;
  @Input() address:Address= {
    address: ''
  };
  @Output() newAddressEvent = new EventEmitter<Address>();
  @Output() closeEvent= new EventEmitter<boolean>();

  close() {
    this.isOpen = false;
    this.newAddressEvent.emit(this.address);
    this.closeEvent.emit(false);
    console.log(this.address);
  }

  abort() {
    this.isOpen = false;
    this.closeEvent.emit(false);
  }
}
