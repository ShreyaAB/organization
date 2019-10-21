import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit() {}


  name = 'Angular 4';
  date:any;
  hours:any;
  minutes:any;
  seconds:any;
  currentLocale: any;

  isTwelveHrFormat:false;
  test:any;

  constructor(){

     setInterval(() =>{
    const currentDate = new Date();
    this.date = currentDate.toLocaleTimeString();
     }, 1000);
   }
 }

