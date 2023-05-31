import { Component } from '@angular/core';
import { Recolection } from '../../models/recolection';
import { Material } from '../../models/material';

@Component({
  selector: 'app-pick-up-form',
  templateUrl: './pick-up-form.component.html'
})
export class PickUpFormComponent {


  recolection: Recolection = {
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
