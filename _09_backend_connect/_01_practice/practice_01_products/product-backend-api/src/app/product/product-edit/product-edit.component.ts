import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  })
  product: Product;
  categoryList: Category[] = [];

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute,
    private router: Router, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategoryList();

    // find product by id
    let id = +this.activatedRoute.snapshot.params.id;
    this.productService.findById(id).subscribe(
      res => {
        this.product = res;
      },
      error => {
        console.error(error);
      },
      () => {
        // create reactive form.
        this.productForm = new FormGroup({
          id: new FormControl(this.product.id),
          name: new FormControl(this.product.name),
          price: new FormControl(this.product.price),
          description: new FormControl(this.product.description),
          category: new FormControl(this.product.category)
        });
      }
    )


  }

  onSubmit(): void {
    this.product = Object.assign<{}, Product>({}, this.productForm.value);
    this.productService.update(this.product.id, this.product).subscribe(
      () => {
        alert("Update successfully");
        this.router.navigateByUrl("/product/list");
      }
    )
  }

  getCategoryList(): void {
    this.categoryService.getAll().subscribe(
      categories => this.categoryList = categories
    )
  }

}
