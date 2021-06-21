import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss'],
})
export class ProductReadComponent implements OnInit {
  constructor(private _productService: ProductService) {}

  products: Product[] = [];

  ngOnInit(): void {
    this._productService.list().subscribe((products) => {
      this.products = products;
      console.log(this.products);
    });
  }
}
