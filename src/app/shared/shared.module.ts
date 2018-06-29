import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { NgbModule, NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';

import { SharedService } from './shared.service';
import { SharedUiService } from './shared-ui.service';

const imports = [
  CommonModule,
  NgbModule
];

@NgModule({
  declarations: [],
  imports: imports,
  exports: imports,
  providers: [SharedService, SharedUiService, NgbTooltipConfig]
})
export class SharedModule { }
