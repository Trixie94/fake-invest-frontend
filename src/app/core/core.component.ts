import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../shared/components/base/base.component';

@Component({
	selector: 'app-core',
	templateUrl: './core.component.html',
	styleUrls: ['./core.component.scss'],
})
export class CoreComponent extends BaseComponent implements OnInit {
	constructor() {
		super();
	}

	ngOnInit() {}
}
