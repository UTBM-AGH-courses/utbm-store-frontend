import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { NgMasonryGridModule } from 'ng-masonry-grid';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: ':id', component: DetailComponent },
];

@NgModule({
  imports: [
    CommonModule,
    NgMasonryGridModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListComponent, DetailComponent]
})
export class ProductModule { }
