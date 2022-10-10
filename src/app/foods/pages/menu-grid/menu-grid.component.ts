import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-grid',
  templateUrl: './menu-grid.component.html',
  styleUrls: ['./menu-grid.component.css']
})
export class MenuGridComponent implements OnInit {
  title: string = "PRODUCT GRID";
  description= "    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam odit iste similique minus eligendi consectetur assumenda, rerum natus harum, officiis, qui tempore obcaecati dolore tempora excepturi aliquam vitae magni? Quam, porro velit rerum officiis reiciendis maxime iste enim soluta quaerat!";
  
  constructor() { }

  ngOnInit(): void {
  }

}
