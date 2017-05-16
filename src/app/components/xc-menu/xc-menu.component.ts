import {Component, OnInit} from '@angular/core';
import {APP_CONF} from '../../../assets/rest/app-conf.const';
import {MENU_ITEMS} from '../../../assets/menu-config/menu-items.const';

@Component({
  selector: 'xc-menu',
  templateUrl: './xc-menu.component.html',
  styleUrls: ['./xc-menu.component.scss']
})
export class XcMenuComponent {

  routes = MENU_ITEMS;
  constructor() {}

}
