import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../admin-dashboard/navbar/navbar';
import { Sidebar } from '../admin-dashboard/sidebar/sidebar';

@Component({
  selector: 'app-borrowed-list',
  imports: [CommonModule, Navbar, Sidebar],
  templateUrl: './borrowed-list.html',
  styleUrl: './borrowed-list.css'
})
export class BorrowedList {
}
