import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss'],
})
export class ProductUpdateComponent implements OnInit {
  constructor(
    private _productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}

  product: Product = {
    id: 0,
    name: '',
    price: 0,
  };

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this._productService.findById(id).subscribe((product) => {
        (this.product.id = product.id),
          (this.product.name = product.name),
          (this.product.price = product.price);
      });
    }
  }

  updateProduct(): void {
    this._productService.update(this.product).subscribe(() => {
      this._productService.showMessage('Produto Atualizado');
      this.route.navigate(['/products']);
    });
  }

  cancel(): void {
    this.route.navigate(['/products']);
  }
}
