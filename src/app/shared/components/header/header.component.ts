import { Component } from '@angular/core';

import { ExpandedMainMenu } from 'src/app/models/header.model';
import { MainMenuNames } from '../../Utils';

@Component({
	selector: 'fake-invest-frontend-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public mainMenuItemsToggleNames = MainMenuNames;
  public expandedMenu: ExpandedMainMenu = {
    burgerMenu: false,
    dashboardMenu: false,
    stocksMenu: true,
    betsMenu: false,
    cryptocurrenciesMenu: false,
  }
  public isLoggedIn = false;

  toggleMenu(menuName: string): void {
    this.expandedMenu[menuName] = !this.expandedMenu[menuName];
  }
}
