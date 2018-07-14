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
        alert('Thêm user thành công');
      }, err => {
        console.log(err)
        alert("Thêm user không thành công");
      });
    }
  }

  newHero() {
    
  }


  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
