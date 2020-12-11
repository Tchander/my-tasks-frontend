import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../project';
import axios from '../../plugins/axios';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  selectedTask: Todo;
  @Input() todos: Todo[];

  constructor() { }

  ngOnInit(): void {
  }

  sortTodosById(todos: Todo[]): Todo[] {
    return todos.sort(
      (a, b) => (a.id > b.id) ? 1 : -1);
  }

  async isCompleted(todo: Todo) {
    this.selectedTask = {...todo};
    this.selectedTask.isCompleted = !this.selectedTask.isCompleted;
    const { data } =
      await axios.patch(`/projects/1/todo/${todo.id}/`,{
        isCompleted: this.selectedTask.isCompleted
      });
    const index = this.todos.findIndex(t => t.id === data.id);
    this.todos.splice(index, 1, data);
  }
}
