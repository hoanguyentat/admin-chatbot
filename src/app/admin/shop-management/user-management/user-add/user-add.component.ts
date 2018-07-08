import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../../core/services/user.service';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  private user: any = {};
  
  submitted = false;

  onSubmit() {
    console.log(this.user);
    if(this.user.password !== this.user.repass){
      alert("Mật khẩu không khớp!")
    } else {
      this.userService.createUser(this.user).subscribe(result => {
        console.log(result);
      }, err => {
        console.log(err)
      });
    }
  }

  newHero() {
    
  }


  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
