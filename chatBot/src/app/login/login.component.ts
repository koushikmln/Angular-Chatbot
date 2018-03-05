import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { Router } from '@angular/router';
import { LoginService } from '../services/login/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login : Login;
  public message : string;
  constructor(
  	private loginService : LoginService,
  	private router: Router
  	) {
  	this.login = new Login("","");
  }

  ngOnInit() {
  }

  loginservice(){
  	console.log(this.login);
  	this.loginService.login(this.login).subscribe(res => {
  		this.router.navigateByUrl('chat');
    }, err =>{
    	this.message = "Invalid Username or password";
    });
  }

}
