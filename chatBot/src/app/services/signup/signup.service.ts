import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class SignupService {

  constructor(private http: Http) { }

  public signup (data){
  	return this.http.post("http://localhost:3000/users/register", data)
  }

}
