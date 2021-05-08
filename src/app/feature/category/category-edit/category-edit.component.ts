import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SystemService } from '@system/system.service';
import { CategoryService } from '@feat/category/category.service';
import { Category } from '@feat/category/category';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  pagetitle: string = "Category Edit";

  category: Category;

  save(): void {
    console.log("CategoryEdit preupdate:", this.category);
    this.categorysvc.change(this.category)
      .subscribe(rc => {
        console.log("CategoryEdit rc:", rc);
        this.router.navigateByUrl("/categories/list");
      });
  }

  constructor(
    private categorysvc: CategoryService,
    private syssvc: SystemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.syssvc.checkLogin();
    let id = this.route.snapshot.params.id;
    console.log("CategoryGet id:", id);
    this.categorysvc.get(+id)
      .subscribe(resp => {
        this.category = resp.data;
        console.log("CategoryGet:", this.category);
      });
  }

}
