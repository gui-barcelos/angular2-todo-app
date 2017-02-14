import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  template: `
  <div>
    <md-list>
        <md-list-item *ngFor="let todo of todos">
            <app-todo-item [todo]="todo" (onRemove)="remove($event)" (onToggle)="toggle($event)"></app-todo-item>
        </md-list-item>
    </md-list>
  </div>
  `
})
export class TodoListComponent implements OnInit {
  @Input()
  todos: Todo[] = [];

  @Output()
  onRemove = new EventEmitter<number>();

  @Output()
  onToggle = new EventEmitter<number>();

  constructor() { }

  remove(id) {
    this.onRemove.emit(id);
  }

  toggle(id) {
    this.onToggle.emit(id);
  }

  ngOnInit() {
    console.log('List Todo Component Injected!!');
  }
}
