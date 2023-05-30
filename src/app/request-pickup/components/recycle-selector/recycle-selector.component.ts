import { Component } from '@angular/core';

@Component({
  selector: 'app-recycle-selector',
  templateUrl: './recycle-selector.component.html'
})
export class RecycleSelectorComponent {

  newMaterialModal:boolean = false;


  openModal():void { 
    this.newMaterialModal=(!this.newMaterialModal);
    console.log(this.newMaterialModal);
  }
  
}
  