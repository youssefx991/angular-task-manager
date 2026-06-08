import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MyTabs } from "../my-tabs/my-tabs";
import { MyAllTasks } from "../my-all-tasks/my-all-tasks";
import { TabChoice, Task, TaskAction, TaskActionType } from '../../types';
import { MyDoneTasks } from "../my-done-tasks/my-done-tasks";
import { MyNotDoneTasks } from "../my-not-done-tasks/my-not-done-tasks";
import { APIService } from '../../app/services/apiservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-task-list',
  imports: [MyTabs, MyAllTasks, MyDoneTasks, MyNotDoneTasks],
  templateUrl: './my-task-list.html',
  styleUrl: './my-task-list.css',
})
export class MyTaskList implements OnInit {
  apiService = inject(APIService);
  router = inject(Router);
  tasks = signal<Task[]>([]);
  displayedTasks = computed(() => {
    const tasks = this.tasks();

    switch (this.choice()) {
      case TabChoice.DONE:
        return tasks.filter(task => task.isDone);
      case TabChoice.NOT_DONE:
        return tasks.filter(task => !task.isDone);
      default:
        return tasks;
    }
  });
  TabChoice = TabChoice;

  choice = signal<TabChoice>(TabChoice.ALL);

  ngOnInit() {
    this.apiService.getTasks().subscribe((tasks: Task[]) => {
      this.tasks.set(tasks);
    });
  }
  onTabChoice(tab: TabChoice) {
    this.choice.set(tab);
  }
  ReceiveTaskActionObjFromFilteredList(TaskActionObj: TaskAction) {
    switch (TaskActionObj.action) {
      case TaskActionType.DELETE:
        this.apiService.deleteTask(TaskActionObj.taskId).subscribe(() => {
          this.tasks.set(this.tasks().filter(task => task.id !== TaskActionObj.taskId));
        });
        break;
      case TaskActionType.DONE: {
        const updatedTaskObj = { ...TaskActionObj.taskObj, isDone: true };
        this.apiService.updateTask(updatedTaskObj).subscribe((updatedTask) => {
          this.tasks.set(this.tasks().map(task => task.id === TaskActionObj.taskId ? updatedTask : task));
        });
        break;
      }
      case TaskActionType.NOT_DONE: {
        const updatedTaskObj = { ...TaskActionObj.taskObj, isDone: false };
        this.apiService.updateTask(updatedTaskObj).subscribe((updatedTask) => {
          this.tasks.set(this.tasks().map(task => task.id === TaskActionObj.taskId ? updatedTask : task));
        });
        break;
      }
      case TaskActionType.UPDATE:
        this.apiService.setTaskToEdit(TaskActionObj.taskObj);
        this.router.navigate(['/form']);
        break;
    }
  }

}
