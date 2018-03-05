import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  
  name: String;
  array = ["Koushik", "Nikhil", "Durga", "Neharica"]
  showName:Boolean ;

  @Input() text: String;

  constructor() { 
  	this.name = "Koushik";
  }

  ngOnInit() {
  	this.showName = true;
  }

}
