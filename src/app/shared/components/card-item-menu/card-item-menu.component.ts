import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-item-menu',
  templateUrl: './card-item-menu.component.html',
  styleUrls: ['./card-item-menu.component.css']
})
export class CardItemMenuComponent implements OnInit {
  @Input() description: string= '';
  constructor() { }

  ngOnInit(): void {
  }

}
