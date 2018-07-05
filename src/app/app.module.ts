import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

const appRoutes: Routes = [
  // { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  { path: '**', redirectTo: 'admin' }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    SharedModule.forRoot()
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
