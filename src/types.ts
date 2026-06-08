import { v4 as uuidv4 } from 'uuid';

export class Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  dueDate: Date;
  category: Category;
  tags: string[];
  isDone: boolean;


  constructor(title: string = 'N/A', description: string = 'N/A', priority: Priority = Priority.Low, dueDate: Date = new Date(), category: Category = Category.Work, tags: string[] = ['N/A'], isDone: boolean = false) {
    this.id = uuidv4().split('-')[0];
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.category = category;
    this.tags = tags;
    this.isDone = isDone;
  }
}

export enum Priority {
  Low = 'low',
  Medium = 'medium',
  High = 'high',
}

export enum Category {
  Work = 'work',
  Personal = 'personal',
  Study = 'study',
}

export class TaskAction {
  taskId: string;
  taskObj: Task;
  action: TaskActionType;
  constructor(taskId: string = '', taskObj: Task = new Task(), action: TaskActionType = TaskActionType.ADD) {
    this.taskId = taskId;
    this.taskObj = taskObj;
    this.action = action;
  }
}

export enum TaskActionType {
  ADD = 'add',
  UPDATE = 'update',
  DELETE = 'delete',
  DONE = 'done',
  NOT_DONE = 'not_done',
}

export enum TabChoice {
  ALL = 'all',
  DONE = 'done',
  NOT_DONE = 'not-done',
}

export type error = {
  message: string;
  state: boolean;
};


export type User = {
  id: string;
  username: string;
  email: string;
  password: string;
}

export const baseUrl = 'http://localhost:3000/';
