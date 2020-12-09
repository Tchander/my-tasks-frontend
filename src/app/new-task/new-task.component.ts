import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  myControl = new FormControl();
  @Input() titles: string[];
  filteredOptions: Observable<string[]>;

  constructor() {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.title),
        map(title => title ? this._filter(title) : this.titles.slice())
      );
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
  constructor(
    public dialogRef: MatDialogRef<NewTaskDialog>,
    @Inject(MAT_DIALOG_DATA) public data: string[]) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  titles = this.data;

  async sendNewTask() {

  }
}
