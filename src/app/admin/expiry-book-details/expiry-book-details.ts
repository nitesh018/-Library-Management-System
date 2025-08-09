import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../admin-dashboard/navbar/navbar';
import { Sidebar } from '../admin-dashboard/sidebar/sidebar';

@Component({
  selector: 'app-expiry-book-details',
  imports: [CommonModule, Navbar, Sidebar],
  templateUrl: './expiry-book-details.html',
  styleUrl: './expiry-book-details.css'
})
export class ExpiryBookDetails {
}
