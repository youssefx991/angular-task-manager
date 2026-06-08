import { Component, inject, Inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { APIService } from '../../app/services/apiservice';
import { Task, User } from '../../types';

@Component({
  selector: 'app-my-log-in',
  imports: [FormsModule],
  templateUrl: './my-log-in.html',
  styleUrl: './my-log-in.css',
})
export class MyLogIn implements OnInit {
  username: string = '';
  password: string = '';
  router = inject(Router);
  apiService = inject(APIService);
  users: User[] = [];

  ngOnInit() {
    this.apiService.getUsers().subscribe((users: User[]) => {
      this.users = users;
      console.log("Users:", users);
    });
  }
  onLogIn(loginForm : NgForm) {
    if (loginForm.invalid) {
      alert('Please fill in all fields correctly.');
      return;
    }

    const user = this.users.find(u => u.username === this.username && u.password === this.password);

    if (user) {
      alert('Log in successful!');
      this.router.navigate(['/home']);
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }
}
