import { Component, OnInit } from '@angular/core';

import { CategoryService } from '@category/category.service';
import { Category } from '@category/category';
import { SystemService } from '@system/system.service'

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  pagetitle: string = "Category List";
  createlink: string = "/categories/create";
  createlinkname: string = "Create New";

  categories: Category[];

  searchfor: string = "";

  constructor(
    private categorysvc: CategoryService,
    private syssvc: SystemService
  ) { }

  ngOnInit() {
    this.categorysvc.list()
      .subscribe(resp => {
        this.categories = resp.Data;
        console.log("CategoryList:", this.categories);
      });
  }

}
