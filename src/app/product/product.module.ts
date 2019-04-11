import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { NgMasonryGridModule } from 'ng-masonry-grid';

@NgModule({
  imports: [
    CommonModule,
    NgMasonryGridModule
  ],
  declarations: [ListComponent],
  exports: [ListComponent]
})
export class ProductModule { }
