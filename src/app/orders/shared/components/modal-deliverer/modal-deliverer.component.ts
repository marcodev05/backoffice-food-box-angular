import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal-deliverer',
  templateUrl: './modal-deliverer.component.html',
  styleUrls: ['./modal-deliverer.component.css']
})
export class ModalDelivererComponent implements OnInit {
  title: string | null = "Shipper";
  orderId: number | undefined;
  constructor(public modalRef: MdbModalRef<ModalDelivererComponent>) { }

  ngOnInit(): void {
  }

}
