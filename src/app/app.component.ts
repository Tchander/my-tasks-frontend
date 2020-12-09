import { Component, OnInit } from '@angular/core';
import axios from '../plugins/axios';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {NewTaskComponent} from './new-task/new-task.component';

export interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
  // project_id: bigint;
  project_id: number
}

export interface Project {
  id: number;
  title: string;
  todos: Todo[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-tasks-frontend';
  projects: Project[];
  project_names = [];

  fake_data: Project[] = [
    { id: 1, title: "Семья", todos: [
        { id: 1, text: "Купить молоко", isCompleted: true, project_id: 1 },
        { id: 2, text: "Заменить масло", isCompleted: false, project_id: 1 }
      ]},
    { id: 2, title: "Работа", todos: [
        { id: 1, text: "Позвонить заказчику", isCompleted: false, project_id: 2}
      ]}
  ]

  listOfCategories(projects: Project[]) {
    for (let project of projects) {
      this.project_names.push(project.title);
    }
  }

  // constructor(public dialog: MatDialog) {}

  async ngOnInit(): Promise<void> {
    const { data } = await axios.get('/projects')
    this.projects = data
    console.log(this.projects)
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(NewTaskComponent, {
  //     width: '500px'
  //   });
  // }
}


