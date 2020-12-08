import { Component, OnInit } from '@angular/core';
// import {ThemePalette} from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-tasks-checkbox',
  templateUrl: './tasks-checkbox.component.html',
  styleUrls: ['./tasks-checkbox.component.css']
})
export class TasksCheckboxComponent implements OnInit {

  selectedTask: Task

  tasks: Task[] = [
    { name: '1', completed: false },
    { name: '2', completed: false }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  isCompleted(task: Task) {
    //  Отправление данных на бэкэнд ( PATCH )
    this.selectedTask = task
    this.selectedTask.completed = !this.selectedTask.completed
  }

}
