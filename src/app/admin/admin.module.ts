import { AdminService } from './services/admin.service';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminComponent } from './admin.component';
import { ReportColumnChartComponent } from './components/report-column-chart/report-column-chart.component';

const adminRoutes: Routes = [
  {
      path: '',
      component: AdminComponent,
      children: [
          { path: 'shop-management', loadChildren: './shop-management/shop-management.module#ShopManagementModule' },
          // { path: '', redirectTo: 'report', pathMatch: 'prefix' },
          { path: 'report', component: ReportColumnChartComponent },
          // { path: '**', redirectTo: '/report' }
      ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes),
    SharedModule,
  ],
  declarations: [
    AdminComponent,
    ReportColumnChartComponent
  ],
  providers: [AdminService]
})

export class AdminModule { }
