import { Component, OnInit, Input } from '@angular/core';
import axios from '../../plugins/axios';
// import {Project} from '../tasks-card/tasks-card.component';

export interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
  // project_id: bigint;
  project_id: number
}

@Component({
  selector: 'app-tasks-checkbox',
  templateUrl: './tasks-checkbox.component.html',
  styleUrls: ['./tasks-checkbox.component.css']
})
export class TasksCheckboxComponent implements OnInit {

  selectedTask: Todo;

  @Input() todos: Todo[];

  constructor() { }

  ngOnInit(): void {
  }

  async isCompleted(todo: Todo) {
    this.selectedTask = todo
    this.selectedTask.isCompleted = !this.selectedTask.isCompleted
    const { data } =
      await axios.patch(`/projects/1/todo/${todo.id}/`,{
        isCompleted: this.selectedTask.isCompleted
      })
    console.log(data)
  }

}
