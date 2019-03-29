import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./../custom.scss']
})
export class HomeComponent implements OnInit {
  images: './../../images/7wOS20190328003612-1.jpg';
  arrCourse = ['AngularJs','ReactJs','Laravel']
  constructor() { }

  ngOnInit() {
  }

}
