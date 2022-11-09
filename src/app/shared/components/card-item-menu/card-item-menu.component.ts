import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-item-menu',
  templateUrl: './card-item-menu.component.html',
  styleUrls: ['./card-item-menu.component.css']
})
export class CardItemMenuComponent implements OnInit {
  @Input() description: string= '';
  @Input() name: string= '';
  @Input() quantity: number | undefined;
  @Input() price: number | undefined;
  @Input() picture: string | undefined = '';
  constructor() { }

  ngOnInit(): void {
  }

}
