import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addBlog(title: HTMLInputElement, content: HTMLInputElement) {
  	console.log(title.value, content.value);
  	let blogList = localStorage.getItem("blogs");
  	let blogs = []
  	if(blogList) {
  		blogs = JSON.parse(blogList)
  	}

  	let blog = {title: title.value, content: content.value}
  	blogs.push(blog)
  	localStorage.setItem("blogs",JSON.stringify(blogs));
  	title.value = ""
  	content.value = ""
  	alert("Added Blog");
  }

}
