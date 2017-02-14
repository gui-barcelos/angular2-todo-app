import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  template: `
  <div layout>
    <md-input id="tbNewTodo" class="new-todo" placeholder="What needs to be done?" [(ngModel)]="newTodo"></md-input>
    <button id="btAddTodo" md-mini-fab (click)="addTodo()">
      <md-icon class="md-24">add</md-icon>
    </button>
  </div>
  `
})
export class AddTodoComponent implements OnInit {
  newTodo: string;

  @Output()
  onAdd = new EventEmitter<string>();

  constructor() { }

  addTodo() {
    this.onAdd.emit(this.newTodo);

    this.newTodo = '';
  }

  ngOnInit() {
    console.log('Add Todo Component Injected!!');
  }
}
