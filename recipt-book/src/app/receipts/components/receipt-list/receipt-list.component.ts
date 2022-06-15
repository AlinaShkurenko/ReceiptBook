import { Component } from '@angular/core';
import { ReceiptService } from './../../services/receipt.service';
import { Router } from '@angular/router';

import type { OnInit } from '@angular/core';
import type { Receipt } from './../../models/receipt.model';

@Component({
  templateUrl: './receipt-list.component.html',
  styleUrls: ['./receipt-list.component.scss']
})
export class ReceiptListComponent implements OnInit {
  receipts!: Receipt[];
  searchValue: string = '';

  constructor(private router: Router, private receiptService: ReceiptService) {}

  get filteredReceipts(): Receipt[] { return this.receipts?.filter(x => x.name.toLowerCase().includes(this.searchValue.toLowerCase())); }

  async ngOnInit(): Promise<void> {
    const response = await this.receiptService.getReceipts();
    this.receipts = response ? response : [];
    this.sortByDate();
  }

  onReceiptClick(receipt: Receipt): void {
    const link = ['/receipt', receipt.id];
    this.router.navigate(link);
  }

  sortByDate(): void {
    this.receipts = this.receipts.sort((x, y) => y.publishYear - x.publishYear);
  }

  sortByRating(): void {
    this.receipts = this.receipts.sort((x, y) => y.rating - x.rating);
  }
}
