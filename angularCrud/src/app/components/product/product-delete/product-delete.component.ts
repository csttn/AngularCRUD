import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss'],
})
export class ProductDeleteComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private _productService: ProductService,
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

  deleteProduct(): void {
    this._productService.delete(this.product.id).subscribe(() => {
      this._productService.showMessage('Produto excluido com sucesso');
      this.route.navigate(['/products']);
    });
  }

  cancel() {
    this.route.navigate(['/products']);
  }
}
