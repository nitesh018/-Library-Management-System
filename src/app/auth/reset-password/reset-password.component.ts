import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  email = '';

  constructor(private authService: AuthService, private router: Router) {}

  resetPassword() {
    this.authService.resetPassword({ email: this.email }).subscribe({
      next: () => alert('Reset link sent'),
      error: () => alert('Error sending reset link')
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
