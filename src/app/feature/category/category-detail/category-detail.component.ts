import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CategoryService } from '@feat/category/category.service';
import { Category } from '@feat/category/category';
import { JsonResponse } from '@feat/utility/json-response';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  resp: JsonResponse; // = new JsonResponse(-200, "MessageValue", "DataValue", "ErrorValue");

  pagetitle: string = "Category Detail";

  category: Category;

  showVerifyDelete: boolean = false;

  edit(): void {
    this.router.navigateByUrl("/categories/edit/"+this.category.Id);
  }
  remove(): void {
    this.showVerifyDelete = !this.showVerifyDelete;
  }
  verify(): void {
    this.categorysvc.remove(this.category)
      .subscribe(res => {
        console.log("CategoryRemove:", res);
        this.router.navigateByUrl("/categories/list");
      });
  }

  constructor(
    private categorysvc: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.categorysvc.get(+id)
      .subscribe(resp => {
        this.category = resp.Data;
        console.log("CategoryGet:", this.category);
      });
  }

}
