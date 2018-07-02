import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopManagementComponent } from './shop-management.component';
import { ShopManagementRoutingModule } from './shop-management-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../shared/shared.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule,
    ShopManagementRoutingModule,
    SharedModule,
    Ng2SmartTableModule
  ],
  declarations: [ShopManagementComponent]
})
export class ShopManagementModule { }
