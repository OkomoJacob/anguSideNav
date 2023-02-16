import { StatisticsComponent } from './statistics/statistics.component';
import { CouponsComponent } from './coupons/coupons.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'products', component: products},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'coupens', component: CouponsComponent},
  {path: 'pages', component: PagesComponent},
  {path: 'media', component: MediaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
