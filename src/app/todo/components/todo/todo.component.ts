import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo',
  template: `
    <section>
    <header>
      <h1>Todos</h1>
      <app-todo-add (onAdd)="addTodo($event)"> </app-todo-add>
    </header>
    <section *ngIf="todos.length > 0">
      <app-todo-list [todos]="todos" (onRemove)="removeTodo($event)" (onToggle)="toggleTodoby($event)">
      </app-todo-list>
    </section>
    <footer *ngIf="todos.length > 0">
      <span>
        <strong>{{todos.length}}</strong> {{todos.length == 1 ? 'item' : 'items'}} left
      </span>
    </footer>
  </section>
  `,
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Todo[];

  constructor(private TodoService: TodoService) {
    this.TodoService = TodoService;
  }

  toggleTodoby(id) {
    this.TodoService.toogleTodoById(id);

    this.getTodos();
  }

  addTodo(todo) {
    this.TodoService.addTodo(todo);

    this.getTodos();
  }

  removeTodo(id) {
    this.TodoService.deleteTodoById(id);

    this.getTodos();
  }

  getTodos() {
    this.todos =  this.TodoService.getAllTodos();
  }

  ngOnInit() {
    this.getTodos();

    console.log('Todo Component Injected!!');
  }
}
