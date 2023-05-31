import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { Material } from 'src/app/request-pickup/models/material';

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
  @Output() newMaterialEvent= new EventEmitter<object>();


  close() {
    this.isOpen = false;
    this.newMaterialEvent.emit(this.material);
    console.log(this.material);
  }
} 