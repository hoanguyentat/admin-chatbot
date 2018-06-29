import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { SharedUiService } from '../../../shared/shared-ui.service';

@Component({
  selector: 'app-report-column-chart',
  templateUrl: './report-column-chart.component.html',
  styleUrls: ['./report-column-chart.component.scss']
})
export class ReportColumnChartComponent implements OnInit {

  constructor(
    private adminService: AdminService,
    private sharedUiService: SharedUiService) { }

  ngOnInit() {
   
  }
}
