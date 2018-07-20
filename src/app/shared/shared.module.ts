import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { NgbModule, NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';

import { SharedService } from './shared.service';
import { SharedUiService } from './shared-ui.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatAutocompleteModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';

const BASE_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  NgbModule,
  HttpClientModule
];

const MAT_MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatGridListModule,
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatAutocompleteModule
];

const COMPONENT = [
  AutocompleteComponent,
  ProductFilterComponent
];

@NgModule({
  declarations: [...COMPONENT],
  imports: [...BASE_MODULES, ...MAT_MODULES],
  exports: [...BASE_MODULES, ...MAT_MODULES, ...COMPONENT],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: SharedModule,
      providers: [
        SharedService,
        SharedUiService,
        NgbTooltipConfig,
      ]
    };
  }
}
