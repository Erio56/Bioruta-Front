import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Material } from 'src/app/request-pickup/interfaces/material';

@Component({
  selector: 'app-new-material-component',
  templateUrl: './new-material.component.html',
})
export class NewMaterialComponent {

  @Input() isOpen: boolean = false;
  @Input() material:Material= {
    materialType:'',
    height:0,
    weight:0,
    width:0
  };
  @Output() newMaterialEvent= new EventEmitter<Material>();
  @Output() closeEvent= new EventEmitter<boolean>();

  close() {
    this.isOpen = false;
    this.newMaterialEvent.emit(this.material);
    this.closeEvent.emit(false);
    console.log(this.material);
  }

  abort() {
    this.isOpen = false;
    this.closeEvent.emit(false);
  }

} 