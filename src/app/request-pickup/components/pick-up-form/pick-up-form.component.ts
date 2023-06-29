import { Component, OnInit } from '@angular/core';
import { Material } from '../../interfaces/material';
import { PickUp } from '../../interfaces/recolection';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pick-up-form',
  templateUrl: './pick-up-form.component.html'
})
export class PickUpFormComponent {

  recolection: PickUp = {
    address: '',
    state: 'to_pick',
    timeToPickUp: '2002-12-3',
    requestedDate: '2002-12-3',
    materials:[]
  }

  constructor(private req:DataService){}


  getAddress(addressEvent: string){
    this.recolection.address = addressEvent;
  }

  addMaterials(material: Material[]) {
    this.recolection.materials = material;
  } 

  createRecolection(): void {
    this.req.postRequest("pick-up/request",this.recolection )
      .subscribe(
        (status) => {
          console.log(status);
        }
      )
  }


}
