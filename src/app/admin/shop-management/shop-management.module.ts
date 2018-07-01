import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopManagementComponent } from './shop-management.component';
import { ShopManagementRoutingModule } from './shop-management-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ShopManagementRoutingModule,
    SharedModule
  ],
  declarations: [ShopManagementComponent]
})
export class ShopManagementModule { }
