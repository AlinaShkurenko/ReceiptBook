import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { Receipt } from '../../models/receipt.model';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReceiptComponent implements OnInit {
  @Input() receipt!: Receipt;
  @Output() receiptClicked = new EventEmitter<Receipt>();

  constructor() { }

  ngOnInit(): void {
  }

  onReceiptClick(): void {
    this.receiptClicked.emit(this.receipt);
  }
}
