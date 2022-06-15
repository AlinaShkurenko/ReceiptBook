import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathNotFoundComponent } from './components';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [PathNotFoundComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule
  ]
})
export class LayoutModule { }
