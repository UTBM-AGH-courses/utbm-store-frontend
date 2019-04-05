import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../rest/api/products.service';
import { Product } from 'src/app/rest';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: Product[];

  constructor(private productsService: ProductsService) { }

  getProducts(): void {
    this.products = this.productsService.listProducts();
  }

  ngOnInit() {
    this.getProducts();
  }

}
