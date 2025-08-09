// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { Navbar } from '../admin-dashboard/navbar/navbar';
// import { Sidebar } from '../admin-dashboard/sidebar/sidebar';

// @Component({
//   selector: 'app-add-student',
//   imports: [CommonModule, FormsModule, Navbar, Sidebar],
//   templateUrl: './add-student.html',
//   styleUrl: './add-student.css'
// })

// export class AddStudent {
//   // private apiUrl = 'http://localhost:3000/api/students';  
//   // private apiUrl = 'http://34.172.54.217:8080/api/users';
//   private apiUrl = 'http://34.172.54.217:8080/users';

  

//   student = {  //clear form 
//     name: '',
//     roleNumber: '',
//     email: '',
//     roleType: '',
//     password: ''
//   };

//   constructor(private http: HttpClient) { }

//   addStudent() {
//     if (this.checkForm()) {
//       // Make HTTP POST request to backend
//       this.http.post(this.apiUrl, this.student).subscribe({
//         next: (response) => {
//           console.log('Student added successfully:', response);
//           alert('Student added successfully!');
//           this.resetForm();
//         },
//         error: (error) => {
//           console.error('Error adding student:', error);
//           alert('Error adding student. Please try again.');
//         }
//       });
//     }
//   }

//   resetForm() {
//     this.student = {
//       name: '',
//       roleNumber: '',
//       email: '',
//       roleType: '',
//       password: ''
//     };
//   }

//   checkForm(): boolean {
//     if (!this.student.name.trim()) {
//       alert('Please enter student name');
//       return false;
//     }
//     if (!this.student.roleNumber.trim()) {
//       alert('Please enter role number');
//       return false;
//     }
//     if (!this.student.email.trim()) {
//       alert('Please enter email');
//       return false;
//     }
//     if (!this.student.roleType.trim()) {
//       alert('Please select role type');
//       return false;
//     }
//     if (!this.student.password.trim()) {
//       alert('Please enter password');
//       return false;
//     }
//     return true;
//   }
// }




import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Navbar } from '../admin-dashboard/navbar/navbar';
import { Sidebar } from '../admin-dashboard/sidebar/sidebar';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [CommonModule, FormsModule, Navbar, Sidebar],
  templateUrl: './add-student.html',
  styleUrls: ['./add-student.css']
})
export class AddStudent {
  private apiUrl = 'http://34.172.54.217:8080/api/users';

  // 🔹 Store your backend token (replace with actual token)
  private token = 'PUT_YOUR_BACKEND_TOKEN_HERE';

  student = {
    name: '',
    roleNumber: '',
    email: '',
    roleType: '',
    password: ''
  };

  constructor(private http: HttpClient) {}

  addStudent() {
    if (this.checkForm()) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.token}`, // ✅ Send token like Postman
        'Content-Type': 'application/json'
      });

      this.http.post(this.apiUrl, this.student, { headers }).subscribe({
        next: (response) => {
          console.log('Student added successfully:', response);
          alert('Student added successfully!');
          this.resetForm();
        },
        error: (error) => {
          console.error('Error adding student:', error);
          alert('Error adding student. Please try again.');
        }
      });
    }
  }

  resetForm() {
    this.student = {
      name: '',
      roleNumber: '',
      email: '',
      roleType: '',
      password: ''
    };
  }

  checkForm(): boolean {
    if (!this.student.name.trim()) {
      alert('Please enter student name');
      return false;
    }
    if (!this.student.roleNumber.trim()) {
      alert('Please enter role number');
      return false;
    }
    if (!this.student.email.trim()) {
      alert('Please enter email');
      return false;
    }
    if (!this.student.roleType.trim()) {
      alert('Please select role type');
      return false;
    }
    if (!this.student.password.trim()) {
      alert('Please enter password');
      return false;
    }
    return true;
  }
}
