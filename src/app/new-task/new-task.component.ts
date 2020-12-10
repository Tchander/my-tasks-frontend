import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import axios from '../../plugins/axios';
import { Project } from '../project';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  title = new FormControl('');
  text = new FormControl('');
  newTaskArrived = new EventEmitter<Project>();
  filteredOptions: Observable<string[]>;

  constructor(
    public dialogRef: MatDialogRef<NewTaskDialog>,
    @Inject(MAT_DIALOG_DATA) public data: string[]) {
  }

  titles = this.data;

  ngOnInit() {
    this.filteredOptions = this.title.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.title),
        map(title => title ? this._filter(title) : this.titles.slice())
      );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  async sendNewTask() {
    const { data } = await axios.post('/todos', {
      title: this.title.value,
      text: this.text.value
    })
    this.onNoClick();
    this.newTaskArrived.emit(data)
  }

  private _filter(title: string): string[] {
    const filterValue = title.toLowerCase();
    return this.titles.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

}

@Component({
  selector: 'new-task-dialog',
  templateUrl: './new-task-dialog.component.html'
})

export class NewTaskDialog {
  constructor() {}

}
