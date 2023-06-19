import { Component, EventEmitter, Output } from '@angular/core';
import { Material } from '../../interfaces/material';



@Component({
  selector: 'app-recycle-selector',
  templateUrl: './recycle-selector.component.html'
})
export class RecycleSelectorComponent {

  newMaterialModal : boolean = false;
  materials : Material[] = [];

  newMaterial : Material = {
    materialType: '',
    height:0,
    weight:0,
    width:0
  }

  @Output() materialSelectorEvent = new EventEmitter<Material[]>();

  addMaterialToMaterials(material:Material):void {
    this.materials?.push(material);
    this.newMaterial = {
      materialType: '',
      height:0,
      weight:0,
      width:0
    }
    this.materialSelectorEvent.emit(this.materials);
  }

  addNewMaterial():Material{
    return this.newMaterial;
  }

  openModal():void { 
    this.newMaterialModal=(!this.newMaterialModal);
    console.log(this.newMaterialModal);
  }
  
}
  