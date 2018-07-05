import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { NgbModule, NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';

import { SharedService } from './shared.service';
import { SharedUiService } from './shared-ui.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

const BASE_MODULES = [
  CommonModule,
  Ng2SmartTableModule,
  FormsModule,
  NgbModule,
  HttpClientModule
];

const MAT_MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatCardModule
];

const COMPONENT = [];

@NgModule({
  declarations: [...COMPONENT],
  imports: [...BASE_MODULES, ... MAT_MODULES],
  exports: [...BASE_MODULES, ... MAT_MODULES, ...COMPONENT],
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
