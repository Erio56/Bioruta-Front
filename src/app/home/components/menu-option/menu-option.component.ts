import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-option',
  templateUrl: './menu-option.component.html',
})
export class MenuOptionComponent {

  @Input()
  name: string = '';

  @Input()
  icon: string = '';


}
