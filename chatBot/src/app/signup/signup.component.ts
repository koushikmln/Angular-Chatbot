import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup/signup.service'
import { Signup } from '../models/signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signup : Signup;
  public message : string;

  constructor(
  	private signupService : SignupService,
  	private router: Router
  	) { 
  	this.signup = new Signup("","","","");
  }

  ngOnInit() {
  }

  submit(){
  	this.signupService.signup(this.signup).subscribe(res => {
  		this.router.navigateByUrl('');
    }, err =>{
    	this.message = err.message;
    });
  }

}
