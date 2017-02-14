import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable()
export class TodoService {
  lastId: number;
  todos: Todo[];

  constructor() {
    this.lastId = 0;
    this.todos = [];
   }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: number): Todo {
    return this.todos.find(todo => todo.id === id);
  }

  addTodo(todo: string): TodoService {
    let newTodo = new Todo({
      id: ++this.lastId,
      title: todo,
      completed: false
    });

    this.todos.push(newTodo);

    return this;
  }

  deleteTodoById(id: number): TodoService {
    this.todos = this.todos.filter(todo =>
      todo.id !== id
    );

    return this;
  }

  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.todos.find(todo => todo.id === id);
    if (!todo) {
      return null;
    }

    Object.assign(todo, values);

    return todo;
  }

  toogleTodoById(id: number) {
    const todo = this.getTodoById(id);

    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });

    return updatedTodo;
  }
}
