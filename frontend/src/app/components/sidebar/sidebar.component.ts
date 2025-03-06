import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  menuItems = [
    {
      title: 'Dashboard',
      icon: 'LayoutDashboard',
      link: '/admin/',
      selected: true
    },
    {
      title: 'Category',
      icon: 'Layers2',
      link: '/admin/categories',
      selected: false
    },
    {
      title: 'Books',
      icon: 'LibraryBig',
      link: '/admin/books',
      selected: false
    },
    {
      title: 'Orders',
      icon: 'Package',
      link: '/admin/orders',
      selected: false
    }
  ]

  constructor(private router: Router) {
  }

  selectMenuItem(selectedItem: any): void {
    this.menuItems.forEach(item => item.selected = (item === selectedItem));
    this.router.navigate([selectedItem.link]);
  }
}
