import { Component, OnInit } from '@angular/core';
import { Static } from './static';
import { OrganizationdataService } from '../organizationdata.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  arr: any = [];

  arrarticle : Static[]=[

  new Static(1,'Goodluck','Good day'),
  new Static(2,'Goodluck','Good day'),
  new Static(3,'Goodluck','Good day'),
  new Static(4,'Goodluck','Good day'),
  new Static(5,'Goodluck','Good day'),
  new Static(6,'Goodluck','Good day'),
  new Static(7,'Goodluck','Good day'),
  new Static(8,'Goodluck','Good day'),
  new Static(9,'Goodluck','Good day'),
  new Static(10,'Goodluck','Good day'),
  new Static(11,'Goodluck','Good day'),
  new Static(12,'Goodluck','Good day'),
  new Static(13,'Goodluck','Good day'),
  new Static(14,'Goodluck','Good day'),
  new Static(15,'Goodluck','Good day'),
  new Static(16,'Goodluck','Good day'),
  new Static(17,'Goodluck','Good day'),
  new Static(18,'Goodluck','Good day'),
  new Static(19,'Goodluck','Good day'),
  new Static(20,'Goodluck','Good day'),


  ];

    constructor(private data:OrganizationdataService) { }

    ngOnInit() {
    }


    selcheckbox(item) {
      console.log(item);
      this.arr.push(item);
      console.log(this.arr.length);
      }

    onseldelete() {
      var result = confirm("Are you sure?");
      if (result) {
      for(let i=0;i<this.arr.length;i++)
      {
      if(this.arrarticle.find(x=>x==this.arr[i]))
      {
      this.arrarticle.splice(this.arrarticle.indexOf(this.arr[i]),1);
      }
      }
      }
    }
  }
