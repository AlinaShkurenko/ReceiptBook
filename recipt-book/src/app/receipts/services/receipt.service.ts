import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Receipt } from '../models/receipt.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'any'
})
export class ReceiptService {
  private baseUrl: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getReceipts(): Promise<Receipt[] | undefined> {
    return this.http.get<Receipt[]>(this.baseUrl + 'receipts').toPromise();
  }

  getReceipt(id: NonNullable<Receipt['id']> | string ): Promise<Receipt | undefined> {
    return this.http.get<Receipt>(this.baseUrl + 'receipts/' + id).toPromise().catch(() => Promise.reject('Error in getReceipt method'));
  }
}
