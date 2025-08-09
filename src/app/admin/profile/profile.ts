import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Navbar } from '../admin-dashboard/navbar/navbar';
import { Sidebar } from '../admin-dashboard/sidebar/sidebar';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, FormsModule, Navbar, Sidebar],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  name = '';
  email = '';
  currentPassword = '';
  newPassword = '';

  updateProfile() {
    if (!this.name || !this.email) {
      alert('Please enter name and email');
      return;
    }
    
    if (this.currentPassword && this.newPassword) {
      if (this.newPassword.length < 6) {
        alert('New password must be at least 6 characters');
        return;
      }
    }
    
    alert('Profile updated successfully!');
    
    this.currentPassword = '';
    this.newPassword = '';
  }
}
