import { Component } from '@angular/core';
import { Material } from '../../interfaces/material';
import { PickUp } from '../../interfaces/recolection';

@Component({
  selector: 'app-pick-up-form',
  templateUrl: './pick-up-form.component.html'
})
export class PickUpFormComponent {

  recolection: PickUp = {
    address: '',
    time: '',
    materials:[]

  }

  addMaterials(material: Material[]): void {
    this.recolection.materials = material;
  } 

  createRecolection(): void {
    console.log(this.recolection);
  }

}
