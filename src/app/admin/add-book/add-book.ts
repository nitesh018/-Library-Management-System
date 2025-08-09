import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../admin-dashboard/navbar/navbar';
import { Sidebar } from '../admin-dashboard/sidebar/sidebar';

@Component({
  selector: 'app-add-book',
  imports: [CommonModule, Navbar, Sidebar],
  templateUrl: './add-book.html',
  styleUrl: './add-book.css'
})
export class AddBook {
}
