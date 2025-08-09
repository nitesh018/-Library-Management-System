import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { DashboardHome } from './admin/admin-dashboard/dashboard-home/dashboard-home';
import { RequestBook } from './admin/request-book/request-book';
import { BorrowedList } from './admin/borrowed-list/borrowed-list';
import { ExpiryBookDetails } from './admin/expiry-book-details/expiry-book-details';
import { AddStudent } from './admin/add-student/add-student';
import { AddBook } from './admin/add-book/add-book';
import { Profile } from './admin/profile/profile';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'admin-dashboard', component: DashboardHome },
  { path: 'request-book', component: RequestBook },
  { path: 'borrowed-list', component: BorrowedList },
  { path: 'expiry-book-details', component: ExpiryBookDetails },
  { path: 'add-student', component: AddStudent },
  { path: 'add-book', component: AddBook },
  { path: 'profile', component: Profile }
];
