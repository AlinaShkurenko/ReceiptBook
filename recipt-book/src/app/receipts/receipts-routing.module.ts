import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceiptDetailsComponent, ReceiptListComponent } from './components';

const routes: Routes = [
  {
    path: 'home',
    component: ReceiptListComponent
  },
  {
    path: 'receipt/:receiptID',
    component: ReceiptDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceiptsRoutingModule { }
