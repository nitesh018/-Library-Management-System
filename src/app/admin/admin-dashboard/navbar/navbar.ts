import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  userTitle = 'Admin';

  constructor(private router: Router) {}

  logout() {
    if (confirm('Are you sure you want to logout?')) {
      this.router.navigate(['/login']);
    }
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }
}
