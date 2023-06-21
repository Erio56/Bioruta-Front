import { Component, OnInit } from '@angular/core';
import { Address } from '../../interfaces/address';

@Component({
  selector: 'app-address-selector',
  templateUrl: './address-selector.component.html'
})
export class AddressSelectorComponent implements OnInit{


  addresses: Address[] = []
  newAddressModal : boolean = false;


  ngOnInit(): void {
  
  }



  openModal():void { 
    this.newAddressModal=(!this.newAddressModal);
    console.log(this.newAddressModal);
  }

  newAddressModalHandler(modalEvent:boolean):void{
    this.newAddressModal = modalEvent;
  }


  addAddressToAddress(address: Address){
    this.addresses.push(address);
  }

}
