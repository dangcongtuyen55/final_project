import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private userService: UserService, private alertService: AlertService, private router: Router) { }

  users:User[]=[]; 

  ngOnInit(): void {
    // console.log(this.authService.decodedToken);
    // const token = localStorage.getItem('token');
    // console.log(token);
    // if(token){
    //   this.router.navigate(['/dashBoard'])

    // }

  }

  onSubmit(f: NgForm) {

    const loginObserver = {
      next: (x: any) => {
        console.log('User  logged in'),
        this.alertService.success('User Login Success');
        this.router.navigateByUrl('/dashBoard')

    },
      error: (err: any) =>{ 
        console.error(err),
        this.alertService.danger(err.error.message);
      }
    };
    console.log(f.value);
    this.authService.login(f.value).subscribe(loginObserver);

   
  }

}
