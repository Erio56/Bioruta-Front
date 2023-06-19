import { Component } from '@angular/core';
import { Address } from '../../interfaces/address';

@Component({
  selector: 'app-address-selector',
  templateUrl: './address-selector.component.html'
})
export class AddressSelectorComponent {

  addresses: Address[] = []



}
