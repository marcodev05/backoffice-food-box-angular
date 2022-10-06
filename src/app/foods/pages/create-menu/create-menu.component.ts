import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css']
})
export class CreateMenuComponent implements OnInit {
  title: string = "PLAT";
  constructor() { }

  ngOnInit(): void {
  }

}
