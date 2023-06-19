import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Material } from '../../interfaces/material';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
})
export class MaterialComponent {

  @Input() currentMaterial:Material = {
    materialType:'',
    height:0,
    weight:0,
    width:0
  };
  @Output() newMaterialEvent = new EventEmitter<Material>;


  materialModal:boolean = false;

  addMaterial(material: Material){
    this.materialModal = false;
    this.currentMaterial = material
    this.newMaterialEvent.emit(this.currentMaterial);
  }

  openModal():void{
    this.materialModal = true;
  }

}
