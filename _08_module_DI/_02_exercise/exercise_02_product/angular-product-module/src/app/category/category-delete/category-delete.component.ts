import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {

  // categoryForm: FormGroup = new FormGroup({
  //   id: new FormControl(''),
  //   name: new FormControl('')
  // });
  categoryForm: FormGroup;
  id: number;

  constructor(private categoryService: CategoryService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const category = this.getCategory(this.id);
      this.categoryForm = new FormGroup({
        id: new FormControl(category.id),
        name: new FormControl(category.name),
      });
    });
  }

  ngOnInit(): void {
  }

  getCategory(id: number): Category {
    return this.categoryService.findById(id);
  }

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id);
    this.router.navigate(['/category/list']);
  }

}
