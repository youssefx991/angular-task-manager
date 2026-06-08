import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task, TaskAction, TaskActionType } from '../../types';


@Component({
  selector: 'app-my-not-done-tasks',
  imports: [],
  templateUrl: './my-not-done-tasks.html',
  styleUrl: './my-not-done-tasks.css',
})
export class MyNotDoneTasks {
  @Input() TasksFromList: Task[] = [];

  @Output() SendTaskActionObjToList = new EventEmitter<TaskAction>();

  markAsDone(task: Task) {
    this.SendTaskActionObjToList.emit(new TaskAction(task.id, task, TaskActionType.DONE));
  }

  updateTask(task: Task) {
    this.SendTaskActionObjToList.emit(new TaskAction(task.id, task, TaskActionType.UPDATE));
  }

  markAsNotDone(task: Task) {
    this.SendTaskActionObjToList.emit(new TaskAction(task.id, task, TaskActionType.NOT_DONE));
  }

  deleteTask(task: Task) {
    this.SendTaskActionObjToList.emit(new TaskAction(task.id, task, TaskActionType.DELETE));
  }
}
