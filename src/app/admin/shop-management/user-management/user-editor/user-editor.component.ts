import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../core/models/user';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent {

  @Input()
  user: User;

  constructor() { }


  public getUser(): User {
    return this.user;
  }

}
