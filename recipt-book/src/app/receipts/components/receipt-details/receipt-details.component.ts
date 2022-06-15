import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import type { ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs';

import { ReceiptService } from '../../services/receipt.service';
import { Receipt } from '../../models/receipt.model';

@Component({
  templateUrl: './receipt-details.component.html',
  styleUrls: ['./receipt-details.component.scss']
})
export class ReceiptDetailsComponent implements OnInit {
  receipt!: Receipt;

  constructor(private receiptService: ReceiptService, private router: Router, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    const observer = {
      next: (receipt: Receipt) => (this.receipt = { ...receipt }),
      error: (err: any) => {
        const link = ['/PathNotFound'];
        this.router.navigate(link);
      }
    };

    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.receiptService.getReceipt(params.get('receiptID')!)
        ),
        map(el => el ? el : {} as Receipt)
      )
      .subscribe(observer);
  }
}
