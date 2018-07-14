import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../core/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  private user: any;
  submitted = false;

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) {
    let userId = this.route.snapshot.params['id']
    console.log(userId)
    this.userService.getUser(userId).subscribe(data => {
      this.user = data;
      console.log(data)
    }, error => {
      console.log(error);
    })
  }

  onSubmit(): void {
    console.log("updating userId + " + this.user.id)
    console.log(this.user);
    this.userService.updatUser(this.user).subscribe(data => {
      console.log("update user success...");
      alert("Cap nhat user thanh cong");
    }, error => {
      console.log(error)
      alert(error.error.detail)
    })
  }

  ngOnInit() {
  }
}
