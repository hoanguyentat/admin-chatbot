import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  // { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  { path: '**', redirectTo: 'admin' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AdminModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    // NoopAnimationsModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
