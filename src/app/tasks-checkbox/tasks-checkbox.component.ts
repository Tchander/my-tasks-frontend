import { Component, OnInit } from '@angular/core';
import axios from '../../plugins/axios';

export interface Task {
  id: number;
  name: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-tasks-checkbox',
  templateUrl: './tasks-checkbox.component.html',
  styleUrls: ['./tasks-checkbox.component.css']
})
export class TasksCheckboxComponent implements OnInit {

  selectedTask: Task

  tasks: Task[] = [
    { id: 1, name: '1', isCompleted: false },
    { id: 2, name: '2', isCompleted: false }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  async isCompleted(task: Task) {
    this.selectedTask = task
    this.selectedTask.isCompleted = !this.selectedTask.isCompleted
    const { data } =
      await axios.patch(`/projects/1/todo/${task.id}/`,{
        isCompleted: this.selectedTask.isCompleted
      })
    console.log(data)
  }

}
