import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CategoryService } from '@feat/category/category.service';
import { Category } from '@feat/category/category';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  pagetitle: string = "Category Create";

  category: Category = new Category('', 1);

  save(): void {
    console.log("CategoryCreate preupdate:", this.category);
    this.categorysvc.create(this.category)
      .subscribe(resp => {
        console.log("CategoryCreate resp:", resp);
        this.router.navigateByUrl("/categories/list");
      });
  }

  constructor(
    private categorysvc: CategoryService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
