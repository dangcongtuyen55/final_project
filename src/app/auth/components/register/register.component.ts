import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertService } from 'ngx-alerts';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private alertService: AlertService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {

    const registerObserver = {
      next: (x: any) =>{ 
        console.log('User register '),
        this.alertService.success('User Created Success');
        this.router.navigateByUrl('/login')
      },
      error: (err: any) =>{ 
        console.error(err),
        this.alertService.danger(err.error.message);
      }
    };
    console.log(f.value);
    this.authService.register(f.value).subscribe(registerObserver);
   }

}
