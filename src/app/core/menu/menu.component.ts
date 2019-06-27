import { Component, OnInit } from '@angular/core';

import { Menu } from '../../core/menu/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu("AMS2", "/home"),
    new Menu("Users", "/users/list", "List of users"),
    new Menu("Vehicles", "/vehicles/list", "List of vehicles"),
    new Menu("Equipment", "/equipment/list", "List of equipment"),
    new Menu("Properties", "/properties/list", "List of properties"),
    new Menu("Departments", "/departments/list", "List of departments"),
    new Menu("Categories", "/categories/list", "List of Categories"),
    new Menu("Addresses", "/addresses/list", "List of addresses"),
    new Menu("Print Assets", '/assets/print', "Print asset list"),
    new Menu("About", "/about", "About AMS2")
    // ,new Menu("Login", "/login", "Login/Logout of AMS2")
  ];

  constructor() { }

  ngOnInit() {
  }

}
