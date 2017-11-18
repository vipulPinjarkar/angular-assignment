import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTodoListComponent } from './display-todo-list.component';

describe('DisplayTodoListComponent', () => {
  let component: DisplayTodoListComponent;
  let fixture: ComponentFixture<DisplayTodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayTodoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
