import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-tasks-card',
  templateUrl: './tasks-card.component.html',
  styleUrls: ['./tasks-card.component.css']
})
export class TasksCardComponent implements OnInit {

  constructor() { }

  @Input() project: Project;

  ngOnInit(): void { }

}
