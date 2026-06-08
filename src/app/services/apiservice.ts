import { inject, Injectable, signal } from '@angular/core';
import { baseUrl, User, Task } from '../../types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  http: HttpClient = inject(HttpClient);
  baseUrl: string = baseUrl;
  tasksUrl: string = this.baseUrl + 'tasks/';
  usersUrl: string = this.baseUrl + 'users/';
  private readonly taskToEdit = signal<Task | null>(null);

  getTasks() {
    return this.http.get<Task[]>(this.tasksUrl);
  }

  addTask(task: Task) {
    return this.http.post<Task>(this.tasksUrl, task);
  }

  setTaskToEdit(task: Task | null) {
    this.taskToEdit.set(task ? { ...task } : null);
  }

  getTaskToEdit() {
    return this.taskToEdit();
  }

  clearTaskToEdit() {
    this.taskToEdit.set(null);
  }

  deleteTask(id: string) {
    return this.http.delete(this.tasksUrl + id);
  }

  updateTask(task: Task) {
    return this.http.put<Task>(this.tasksUrl + task.id, task);
  }


  getUsers() {
    return this.http.get<User[]>(this.usersUrl);
  }

  addUser(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }

}
