import { AdminService } from './services/admin.service';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { AdminComponent } from './admin.component';
import { ReportColumnChartComponent } from './components/report-column-chart/report-column-chart.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    AdminRoutingModule,
    SharedModule,
  ],
  declarations: [
    AdminComponent,
    ReportColumnChartComponent
  ],
  providers: [AdminService]
})

export class AdminModule { }
