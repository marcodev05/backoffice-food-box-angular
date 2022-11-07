import { AotSummaryResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  title: string = "ORDERS";
  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
