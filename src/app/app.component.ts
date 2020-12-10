import { Component, OnInit } from '@angular/core';
import axios from '../plugins/axios';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {NewTaskComponent, NewTaskDialog} from './new-task/new-task.component';

export interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
  project_id: bigint;
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

  project: any;

  listOfCategories(projects: Project[]) {
    return this.projects.map(p => p.title)
  }

  constructor(public dialog: MatDialog) {}

  async ngOnInit(): Promise<void> {
    const { data } = await axios.get('/projects')
    this.projects = data
    console.log(this.projects)
  }

  openDialog(): void {
    this.dialog.open(NewTaskComponent, {
      width: '400px',
      data: this.listOfCategories(this.projects)
    });
    console.log(this.project)
  }

}


