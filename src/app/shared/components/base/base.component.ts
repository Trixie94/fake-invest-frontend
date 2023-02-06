import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
	selector: 'fake-invest-frontend-base',
	template: '<p></p>',
})
export class BaseComponent implements OnDestroy {
	subscriptionEnd = new Subject<void>();

	ngOnDestroy(): void {
		this.subscriptionEnd.next();
		this.subscriptionEnd.complete();
	}
}
