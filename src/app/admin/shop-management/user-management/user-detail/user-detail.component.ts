import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { UserDetail } from '../../../../core/models/UserDetail';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnChanges {

  @Input()
  public userDetail: UserDetail;
  constructor() { }

  ngOnChanges() {

  }

}
