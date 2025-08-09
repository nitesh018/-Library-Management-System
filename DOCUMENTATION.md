# Library Management System - Complete Documentation

## 📚 Project Overview

The Library Management System is a comprehensive web application built with **Angular 20.1.4** that allows administrators to manage students, books, and borrowing operations in a library environment. The system provides a clean, user-friendly interface for handling all library-related tasks.

## 🌟 Features

### Authentication & Authorization
- **User Login**: Secure login system with token-based authentication
- **Password Reset**: Password recovery functionality
- **Role-based Access**: Admin and User role management
- **Token Management**: JWT tokens stored in localStorage for session persistence

### Student Management
- **Add Students**: Register new students with complete details
- **View Students**: Browse and search through student records
- **Role Assignment**: Assign user or admin roles to students
- **Student Profiles**: Detailed student information management

### Book Management
- **Add Books**: Add new books to the library inventory
- **Book Catalog**: Browse available books
- **Book Details**: Comprehensive book information

### Borrowing System
- **Book Requests**: Handle book borrowing requests
- **Borrowed Books List**: Track currently borrowed books
- **Return Management**: Process book returns
- **Expiry Tracking**: Monitor overdue books and expiry dates

### Dashboard & Analytics
- **Admin Dashboard**: Comprehensive overview of library statistics
- **Real-time Stats**: Live data about books, students, and borrowing activities
- **Visual Analytics**: Charts and graphs for better insights

## 🏗️ Project Structure

```
library-login-app/
├── src/
│   ├── app/
│   │   ├── admin/                     # Admin-specific components
│   │   │   ├── add-book/             # Add new books
│   │   │   ├── add-student/          # Add new students
│   │   │   ├── admin-dashboard/      # Main dashboard
│   │   │   │   ├── dashboard-home/   # Dashboard home page
│   │   │   │   ├── navbar/           # Navigation bar
│   │   │   │   └── sidebar/          # Sidebar navigation
│   │   │   ├── borrowed-list/        # List of borrowed books
│   │   │   ├── expiry-book-details/  # Overdue books tracking
│   │   │   ├── profile/              # User profile management
│   │   │   └── request-book/         # Book request handling
│   │   ├── auth/                     # Authentication components
│   │   │   ├── login/                # Login component
│   │   │   ├── reset-password/       # Password reset
│   │   │   └── auth.service.ts       # Authentication service
│   │   ├── services/                 # Shared services
│   │   │   └── library.service.ts    # Main library service
│   │   ├── app.component.ts          # Root component
│   │   ├── app.config.ts             # App configuration
│   │   └── app.routes.ts             # Routing configuration
│   ├── index.html                    # Main HTML file
│   ├── main.ts                       # Application bootstrap
│   └── styles.css                    # Global styles
├── public/                           # Static assets
├── angular.json                      # Angular configuration
├── package.json                      # Dependencies
└── tsconfig.json                     # TypeScript configuration
```

## 🔧 Technical Stack

### Frontend
- **Framework**: Angular 20.1.4
- **Language**: TypeScript
- **Styling**: CSS3
- **HTTP Client**: Angular HttpClient
- **Routing**: Angular Router
- **Forms**: Angular Reactive Forms & Template-driven Forms

### Backend Integration
- **API Base URL**: `http://34.172.54.217:8080`
- **Communication**: RESTful API calls
- **Authentication**: JWT Token-based

### Development Tools
- **Node.js**: Runtime environment
- **Angular CLI**: Development tooling
- **TypeScript**: Type-safe JavaScript

## 📋 API Endpoints

### Authentication
- `POST /users/login` - User login
- `POST /admin/login` - Admin login  
- `POST /users/resetpassword` - Password reset

### Students
- `GET /students` - Get all students
- `POST /students/add` - Add new student

### Books
- `GET /books` - Get all books

### Borrowing
- `GET /borrow` - Get borrowed books
- `PUT /borrow/return/{id}` - Return book

### Dashboard
- `GET /dashboard/stats` - Get dashboard statistics

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Angular CLI (`npm install -g @angular/cli`)

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd library-login-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   - Update API URLs in service files if needed
   - Configure environment-specific settings

4. **Run Development Server**
   ```bash
   ng serve
   ```

5. **Access Application**
   - Open browser and navigate to `http://localhost:4200`

## 🔐 Authentication Flow

### Login Process
1. User enters email and password
2. Frontend sends credentials to backend API
3. Backend validates and returns JWT token
4. Token stored in localStorage
5. User redirected to admin dashboard
6. Token attached to subsequent API requests

### Route Protection
- Routes are protected based on authentication status
- Unauthorized users redirected to login page
- Role-based access control implemented

## 📱 Component Details

### 1. Login Component (`login.component.ts`)
**Purpose**: Handles user authentication
**Key Features**:
- Form validation
- Token management
- Error handling
- Navigation to dashboard on success

```typescript
login() {
  const data = { email: this.userId, password: this.password };
  this.authService.userLogin(data).subscribe({
    next: (res) => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/admin-dashboard']);
    },
    error: () => alert('Login failed. Check your credentials.')
  });
}
```

### 2. Add Student Component (`add-student.ts`)
**Purpose**: Register new students in the system
**Key Features**:
- Form validation
- Data submission to backend
- Success/error handling
- Form reset functionality

```typescript
addStudent() {
  if (this.checkForm()) {
    this.http.post(this.apiUrl, this.student).subscribe({
      next: (response) => {
        alert('Student added successfully!');
        this.resetForm();
      },
      error: (error) => alert('Error adding student.')
    });
  }
}
```

### 3. Library Service (`library.service.ts`)
**Purpose**: Centralized API communication
**Key Features**:
- HTTP client wrapper
- Consistent API endpoints
- Observable-based responses

## 🎨 User Interface

### Design Principles
- **Clean & Intuitive**: Easy-to-use interface
- **Responsive**: Works on desktop and mobile devices
- **Consistent**: Uniform design language throughout
- **Accessible**: User-friendly for all users

### Navigation
- **Sidebar**: Main navigation menu
- **Navbar**: Top navigation with user info
- **Breadcrumbs**: Clear page hierarchy
- **Quick Actions**: Easy access to common tasks

## 🔄 Data Flow

### Student Addition Flow
1. Admin fills student form
2. Form validation occurs
3. Data sent to backend API
4. Success/error feedback displayed
5. Form reset on success

### Book Borrowing Flow
1. Student requests book
2. Request logged in system
3. Admin approves/rejects
4. Book status updated
5. Notifications sent

## 🛡️ Security Features

### Frontend Security
- **Input Validation**: Client-side form validation
- **XSS Protection**: Sanitized user inputs
- **CSRF Protection**: Token-based requests
- **Secure Routing**: Protected routes

### Authentication Security
- **JWT Tokens**: Secure token-based authentication
- **Token Expiry**: Automatic session timeout
- **Role Verification**: Server-side role checking

## 🔍 Testing

### Unit Testing
- Component testing with Jasmine/Karma
- Service testing for API calls
- Form validation testing

### Integration Testing
- End-to-end testing with Protractor/Cypress
- API integration testing
- User workflow testing

## 📈 Performance Optimization

### Frontend Optimizations
- **Lazy Loading**: Route-based code splitting
- **OnPush Strategy**: Optimized change detection
- **Service Workers**: Caching strategies
- **Bundle Analysis**: Code optimization

### Best Practices
- **Component Reusability**: Modular component design
- **Service Injection**: Efficient dependency injection
- **Memory Management**: Proper subscription handling

## 🚀 Deployment

### Build Process
```bash
ng build
```

### Deployment Options
- **Static Hosting**: Netlify, Vercel, GitHub Pages
- **Cloud Platforms**: AWS, Azure, Google Cloud
- **Traditional Hosting**: Apache, Nginx

## 🐛 Troubleshooting

### Common Issues

1. **Routing Errors**
   - Ensure you're in the correct directory
   - Check Angular CLI installation

2. **API Connection Issues**
   - Verify backend server is running
   - Check API endpoint URLs
   - Validate CORS settings

3. **Authentication Problems**
   - Clear localStorage
   - Check token expiry
   - Verify backend authentication

### Debug Commands
```bash
ng serve --open          # Start with browser opening
ng build --watch         # Build with file watching
ng test                  # Run unit tests
ng e2e                   # Run end-to-end tests
```

## 📞 Support & Contact

For technical support or questions about this project:
- Create an issue in the repository
- Contact the development team
- Check documentation for common solutions

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Submit a pull request

## 📚 Additional Resources

- [Angular Documentation](https://angular.io/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [RxJS Documentation](https://rxjs.dev/)
- [Angular Material](https://material.angular.io/)

---

**Last Updated**: August 8, 2025
**Version**: 1.0.0
**Maintainer**: Development Team
