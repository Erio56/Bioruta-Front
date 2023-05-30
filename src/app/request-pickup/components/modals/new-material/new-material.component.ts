import { Component, Input, ElementRef, Renderer2, AfterViewInit, OnDestroy, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-material-component',
  templateUrl: './new-material.component.html',
})
export class NewMaterialComponent {

  public material = { 
    materialType: '', 
    weight: '', 
    height: '',
    with: ''
  };


  @Input() isOpen: boolean = false;
  @Output() newItemEvent = new EventEmitter<boolean>();
  

  close() {
    this.isOpen = false;
    this.newItemEvent.emit(false);
  }
} 