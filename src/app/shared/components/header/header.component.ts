import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts';
import { AuthService } from 'src/app/shared/services/auth.service';
import { JwtHelperService } from "@auth0/angular-jwt";  
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  helper = new JwtHelperService();
  decodedToken:any;

  constructor(public authService: AuthService, private alertService: AlertService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logOut();
    this.router.navigateByUrl('/login')
  }

}
