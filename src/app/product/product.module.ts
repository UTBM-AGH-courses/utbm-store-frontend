import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { NgMasonryGridModule } from 'ng-masonry-grid';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';

const appRoutes: Routes = [
  { path: 'products', component: ListComponent },
  { path: '', component: ListComponent },
  { path: 'products/:id', component: DetailComponent },
];

@NgModule({
  imports: [
    CommonModule,
    NgMasonryGridModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  declarations: [ListComponent, DetailComponent],
  exports: [ListComponent, DetailComponent, RouterModule]
})
export class ProductModule { }
