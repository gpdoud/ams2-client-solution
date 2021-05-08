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
  errormessage: string = "";

  categories: Category[];


  searchfor: string = "";

  sortProperty: string = "Name";
  sortOrder: string = "asc";
  sort(sortBy: string): void {
    if(sortBy === this.sortProperty)
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    else {
      this.sortProperty = sortBy;
      this.sortOrder = 'asc';
    }
  }

  constructor(
    private categorysvc: CategoryService,
    private syssvc: SystemService
  ) { }

  ngOnInit() {
    this.syssvc.checkLogin();
    this.categorysvc.list()
      .subscribe(resp => {
        this.categories = resp.data;
        console.log("CategoryList:", this.categories);
        this.errormessage = `${this.categories.length} categories`;
      });
  }

}
