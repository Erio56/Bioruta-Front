import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Address } from '../../interfaces/address';
import { DataService } from 'src/app/services/data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-selector',
  templateUrl: './address-selector.component.html'
})
export class AddressSelectorComponent implements OnInit{


  addresses: Address[] = []

  newAddressModal : boolean = false;

  @Output() addressOutput =  new EventEmitter<string>()

  constructor(private req:DataService){}


  ngOnInit(): void {
    this.req.getRequest('user/address')
      .subscribe(
        (data) => {
          this.addresses = data as Address[];
          console.log(data);
        }
      )
  }


  openModal():void { 
    this.newAddressModal=(!this.newAddressModal);
  }

  newAddressModalHandler(modalEvent:boolean):void{
    this.newAddressModal = modalEvent;
  }


  selectedAddressEvent(idSelected: string){
    this.addressOutput.emit(idSelected);
  }

  addAddressToAddress(address: Address){
    this.addresses.push(address);
  }

}
