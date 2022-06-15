import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

import { ReceiptsRoutingModule } from './receipts-routing.module';
import { ReceiptListComponent, ReceiptComponent, ReceiptDetailsComponent } from './components';


@NgModule({
  declarations: [
    ReceiptListComponent,
    ReceiptComponent,
    ReceiptDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonToggleModule,
    MatInputModule,
    ReceiptsRoutingModule
  ]
})
export class ReceiptsModule { }
