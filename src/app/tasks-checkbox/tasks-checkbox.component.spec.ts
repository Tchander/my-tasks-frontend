import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksCheckboxComponent } from './tasks-checkbox.component';

describe('TasksCheckboxComponent', () => {
  let component: TasksCheckboxComponent;
  let fixture: ComponentFixture<TasksCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
