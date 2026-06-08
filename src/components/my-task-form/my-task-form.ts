import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { Category, error, Priority, Task } from '../../types';
import { APIService } from '../../app/services/apiservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './my-task-form.html',
  styleUrl: './my-task-form.css',
})
export class MyTaskForm implements OnInit {
  apiService = inject(APIService);
  router = inject(Router);

  taskForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    priority: new FormControl('low', [Validators.required]),
    dueDate: new FormControl('', [Validators.required]),
    category: new FormControl('work', [Validators.required]),
    tags: new FormControl('', [Validators.required]),
    isDone: new FormControl(false)
  });

  error: error = { message: '', state: false };

  get isEditing() {
    return !!this.apiService.getTaskToEdit();
  }

  ngOnInit() {
    const taskToEdit = this.apiService.getTaskToEdit();

    if (taskToEdit) {
      this.taskForm.patchValue({
        title: taskToEdit.title,
        description: taskToEdit.description,
        priority: taskToEdit.priority,
        dueDate: new Date(taskToEdit.dueDate).toISOString().slice(0, 10),
        category: taskToEdit.category,
        tags: taskToEdit.tags.join(' '),
        isDone: taskToEdit.isDone,
      });
    }
  }


  addTask() {
    if (this.taskForm.invalid) {
      this.error = { message: 'Please fill all the fields correctly', state: true };
      return;
    }

    const formValue = this.taskForm.getRawValue();
    const taskToEdit = this.apiService.getTaskToEdit();

    const newTask = new Task(
      formValue.title ?? '',
      formValue.description ?? '',
      formValue.priority as Priority,
      formValue.dueDate ? new Date(formValue.dueDate) : new Date(),
      formValue.category as Category,
      typeof formValue.tags === 'string' ? formValue.tags.trim().split(/\s+/).filter(Boolean) : [],
      formValue.isDone ?? false
    );

    if (taskToEdit) {
      newTask.id = taskToEdit.id;
    }

    if (taskToEdit) {
      this.apiService.updateTask(newTask).subscribe((updatedTask: Task) => {
        console.log("Updated Task in form: ", updatedTask);
        this.apiService.clearTaskToEdit();
        this.resetForm();
        this.router.navigate(['/list']);
      });
    } else {
      this.apiService.addTask(newTask).subscribe((addedTask: Task) => {
        console.log("Added Task in form: ", addedTask);
        this.apiService.clearTaskToEdit();
        this.resetForm();
        this.router.navigate(['/list']);
      });
    }
  }

  resetForm() {
    this.taskForm.reset({
      title: '',
      description: '',
      priority: 'low',
      dueDate: '',
      category: 'work',
      tags: '',
      isDone: false,
    });
    this.error = { message: '', state: false };
  }
}



