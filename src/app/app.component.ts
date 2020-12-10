import { Component, OnInit } from '@angular/core';
import axios from '../plugins/axios';
import { MatDialog } from '@angular/material/dialog';
import { NewTaskComponent } from './new-task/new-task.component';
import { Project } from './project'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-tasks-frontend';
  projects: Project[];

  constructor(public dialog: MatDialog) {
  }

  async ngOnInit(): Promise<void> {
    const { data } = await axios.get('/projects')
    this.projects = data
  }

  listOfCategories() {
    return this.projects.map(p => p.title)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewTaskComponent, {
      width: '400px',
      data: this.listOfCategories()
    });
    dialogRef.componentInstance.newTaskArrived.subscribe((data) => {
      const index = this.projects.findIndex(project => project.id === data.id)
      if (index !== -1) {
        this.projects.splice(index, 1, data)
      } else {
        this.projects.push(data)
      }
    });
  }
}


