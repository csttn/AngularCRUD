import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit {
  constructor(private productService: ProductService, private route: Router) {}

  product: Product = {
    id: Math.random() * 676474,
    name: '',
    price: 0,
  };

  ngOnInit(): void {}

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto Criado');
      this.route.navigate(['/products']);
    });
  }

  cancel(): void {
    this.route.navigate(['/products']);
  }
}
