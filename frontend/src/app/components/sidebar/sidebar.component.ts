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
    },
    {
      title: 'Category',
      icon: 'Layers2',
      link: '/admin/categories',
    },
    {
      title: 'Books',
      icon: 'LibraryBig',
      link: '/admin/books',
    },
    {
      title: 'Orders',
      icon: 'Package',
      link: '/admin/orders',
    }
  ]

  selectedMenuItem: any = this.menuItems[0];

  constructor(private router: Router) {
    this.updateSelectedMenuItem(this.router.url);
  }

  selectMenuItem(selectedItem: any): void {
    this.selectedMenuItem = selectedItem;
    this.router.navigate([selectedItem.link]);
  }

  updateSelectedMenuItem(currentUrl: string): void {
    const foundItem = this.menuItems.find(item => item.link === currentUrl);
    if (foundItem) {
      this.selectedMenuItem = foundItem;
    }
  }
}
