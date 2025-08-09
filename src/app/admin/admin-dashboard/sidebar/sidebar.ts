import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  activeMenu = 'home';

  menuItems = [
    { name: 'home', label: 'Dashboard', icon: '🏠', route: 'admin-dashboard' },
    { name: 'request', label: 'Request Book', icon: '📚', route: 'request-book' },
    { name: 'borrowed', label: 'Borrowed Books', icon: '📖', route: 'borrowed-list' },
    { name: 'expiry', label: 'Due Books', icon: '⏰', route: 'expiry-book-details' },
    { name: 'add-student', label: 'Add Student', icon: '👨‍🎓', route: 'add-student' },
    { name: 'add-book', label: 'Add Book', icon: '➕', route: 'add-book' }
  ];

  constructor(private router: Router) {}

  goTo(item: any) {
    this.activeMenu = item.name;
    this.router.navigate([`/${item.route}`]);
  }
}
