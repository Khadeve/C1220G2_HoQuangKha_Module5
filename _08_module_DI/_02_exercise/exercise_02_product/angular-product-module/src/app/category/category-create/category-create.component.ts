import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  categoryForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
  });
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const category = this.categoryForm.value;
    console.log(category);
    this.categoryService.saveCategory(category);
    this.categoryForm.reset();
  }

}
