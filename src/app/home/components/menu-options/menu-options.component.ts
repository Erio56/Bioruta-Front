import { Component, Input } from '@angular/core';
import { menuOption } from '../../interfaces/menuOption';

@Component({
  selector: 'app-menu-options',
  templateUrl: './menu-options.component.html',
})
export class MenuOptionsComponent {

  @Input()
  tittle: string = '';

  @Input()
  menuOptions: menuOption[] = [];




}
