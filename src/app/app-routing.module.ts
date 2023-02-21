import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StockComponent } from './components/stock/stock.component';

const routes: Routes = [
  {
		path: '',
		component: DashboardComponent,
	},
  {
		path: 'stock',
		component: StockComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
