import { Component, OnInit, Input } from '@angular/core';

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
  selector: 'app-tasks-card',
  templateUrl: './tasks-card.component.html',
  styleUrls: ['./tasks-card.component.css']
})
export class TasksCardComponent implements OnInit {
  constructor() { }

  @Input() project: Project

  ngOnInit(): void {
  }


}
