import { Component, OnInit, Input } from '@angular/core';
import { ProductsService, Product } from 'src/app/rest';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input()
  productId: number;

  product: Product;

  constructor(private productsService: ProductsService, private route: ActivatedRoute) { }

  getProductById(id: number) {
    this.productsService.getProductById(id).subscribe(product => {
      this.product = product; });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(param =>
      this.productId = Number(param.get('id')));
    this.getProductById(this.productId);
  }

}
