import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { User } from '../../../../core/models/User';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnChanges {

  @Input()
  public userDetail: User;
  constructor() { }

  ngOnChanges() {

  }

}
