import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'fake-invest-frontend-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	public burgerMenuOpen = false;
}
