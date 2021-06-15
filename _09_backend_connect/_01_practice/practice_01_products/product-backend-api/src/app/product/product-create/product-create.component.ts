import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;
  categoryList: Category[] = [];

  constructor(private productService: ProductService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormControl('')
    });

    this.getCategoryList();
  }

  onSubmit(): void {
    const product = this.productForm.value;
    this.productService.save(product).subscribe(
      () => {
        alert("Create new product successfully!");
        this.productForm.reset();
      }
    );
  }

  getCategoryList(): void {
    this.categoryService.getAll().subscribe(
      categories => this.categoryList = categories
    )
  }
}
