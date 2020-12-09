import { Component, OnInit } from '@angular/core';

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
  fake_data: Project[] = [
    { id: 1, title: "Семья", todos: [
        { id: 1, text: "Купить молоко", isCompleted: true, project_id: 1 },
        { id: 2, text: "Заменить масло", isCompleted: false, project_id: 1 }
      ]},
    { id: 2, title: "Работа", todos: [
        { id: 1, text: "Позвонить заказчику", isCompleted: false, project_id: 2}
      ]}
  ]

  ngOnInit(): void {
    this.projects = this.fake_data
  }

}
