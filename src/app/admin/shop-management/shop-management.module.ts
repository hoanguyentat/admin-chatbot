import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopManagementComponent } from './shop-management.component';
import { ShopManagementRoutingModule } from './shop-management-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    ShopManagementRoutingModule,
    MatToolbarModule,
    MatButtonModule
  ],
  declarations: [ShopManagementComponent]
})
export class ShopManagementModule { }
