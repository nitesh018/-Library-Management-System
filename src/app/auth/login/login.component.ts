import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userId = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const data = {
      email: this.userId,
      password: this.password
    };

    this.authService.userLogin(data).subscribe({
      next: (res) => {
        alert('Login successful!');
        localStorage.setItem('token', res.token);
        this.router.navigate(['/admin-dashboard']);
      },
      error: () => {
        alert('Login failed. Check your credentials.');
      }
    });
  }

  goToReset() {
    this.router.navigate(['/reset-password']);
  }
}
