import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../admin-dashboard/navbar/navbar';
import { Sidebar } from '../admin-dashboard/sidebar/sidebar';

@Component({
  selector: 'app-request-book',
  imports: [CommonModule, Navbar, Sidebar],
  templateUrl: './request-book.html',
  styleUrl: './request-book.css'
})
export class RequestBook {
}
