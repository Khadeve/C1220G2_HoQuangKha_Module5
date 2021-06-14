import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  product: Product;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // find product by id
    let id = +this.activatedRoute.snapshot.params.id;
    let product = this.productService.findById(id);

    // create reactive form.
    this.productForm = new FormGroup({
      id: new FormControl(product.id),
      name: new FormControl(product.name),
      price: new FormControl(product.price),
      description: new FormControl(product.description),
    });
  }

  onSubmit(): void {
    this.product = {
      id: this.productForm.value.id,
      name: this.productForm.value.name,
      price: this.productForm.value.price,
      description: this.productForm.value.description
    }
    this.productService.update(this.product);
    this.router.navigateByUrl('');
  }

}
