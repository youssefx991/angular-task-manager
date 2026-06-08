import { Routes } from '@angular/router';
import { App } from './app';
import { MySlider } from '../components/my-slider/my-slider';
import { MyTaskForm } from '../components/my-task-form/my-task-form';
import { MyTaskList } from '../components/my-task-list/my-task-list';
import { MyHome } from '../components/my-home/my-home';
import { MySignUp } from '../components/my-sign-up/my-sign-up';
import { MyLogIn } from '../components/my-log-in/my-log-in';
import { myAuthGuardGuard } from './Guards/my-auth-guard-guard';
import { MyNotFound } from '../components/my-not-found/my-not-found';
import { MyAllTasks } from '../components/my-all-tasks/my-all-tasks';
import { MyDoneTasks } from '../components/my-done-tasks/my-done-tasks';
import { MyNotDoneTasks } from '../components/my-not-done-tasks/my-not-done-tasks';

export const routes: Routes =
[
  {
    title: 'Task Manager | Home',
    path: '',
    component: MyHome,
    canActivate: [myAuthGuardGuard],
  },
  {
    title: 'Task Manager | Home',
    path: 'home',
    component: MyHome,
    canActivate: [myAuthGuardGuard],
  },
  {
    title: 'Task Manager | Slider',
    path: 'slider',
    component: MySlider,
    canActivate: [myAuthGuardGuard],
  },
  {
    title: 'Task Manager | Form',
    path: 'form',
    component: MyTaskForm,
    canActivate: [myAuthGuardGuard],
  },
  {
    title: 'Task Manager | List',
    path: 'list',
    component: MyTaskList,
    canActivate: [myAuthGuardGuard],
  },

  {
    title: 'Task Manager | Sign Up',
    path: 'signup',
    component: MySignUp,
  },
  {
    title: 'Task Manager | Log In',
    path: 'login',
    component: MyLogIn,
  },
  {
    title: 'Task Manager | Not Found',
    path: '**',
    component: MyNotFound,
  }
];
