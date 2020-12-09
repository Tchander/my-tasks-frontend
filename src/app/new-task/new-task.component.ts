import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



export interface Category {
  title: string;
}

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  myControl = new FormControl();
  options: Category[] = [
    {title: 'Семья'},
    {title: 'Работа'},
    {title: 'Прочее'}
  ];
  filteredOptions: Observable<Category[]>;

  // constructor(
  //   public dialogRef: MatDialogRef<NewTaskComponent>
  // ) {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.title),
        map(title => title ? this._filter(title) : this.options.slice())
      );
  }

  displayFn(category: Category): string {
    return category && category.title ? category.title : '';
  }

  private _filter(title: string): Category[] {
    const filterValue = title.toLowerCase();

    return this.options.filter(option => option.title.toLowerCase().indexOf(filterValue) === 0);
  }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }
}
