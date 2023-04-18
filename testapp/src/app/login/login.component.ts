import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../Service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private builder: FormBuilder,private service: AuthService, private router: Router,private toastr: ToastrService) {

    sessionStorage.clear();
  }
  result: any;
  loginform=this.builder.group({
    Username:this.builder.control('',Validators.required),
    Password:this.builder.control('',Validators.required)

  })
  proceedlogin() {
    if (this.loginform.valid) {


    this.service.Login(this.loginform.value).subscribe(res => {
        this.result = res;
         console.log(res);
        if (this.result.password === this.loginform.value.Password) {
          if (this.result.isactive) {
            sessionStorage.setItem('username',this.result.Username);
            sessionStorage.setItem('role',this.result.role);
            this.router.navigate(['']);
          } else {
            this.toastr.error('Please contact Admin', 'InActive User');
          }
        } else {
          this.toastr.error('Invalid credentials');
        }
      });
    } else {
      this.toastr.warning('Please enter valid data.')
    }
  }
}
