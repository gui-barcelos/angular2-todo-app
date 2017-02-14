import { Todo } from '../models/todo.model';
import { TestBed, inject } from '@angular/core/testing';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoService]
    });
  });

  it('should ...', inject([TodoService], (service: TodoService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllTodos()', () => {
    it('should return empty by default', inject([TodoService], (service: TodoService) => {
      expect(service.getAllTodos()).toEqual([]);
    }));

    it('should return all todos', inject([TodoService], (service: TodoService) => {
      service.addTodo('Todo 1');
      service.addTodo('Todo 2');

      expect(service.getAllTodos().length).toEqual(2);
    }));
  });

  describe('#save(todo)', () => {
    it('should assign an incrementing id', inject([TodoService], (service: TodoService) => {
      service.addTodo('Todo 1');
      service.addTodo('Todo 2');

      expect(service.getTodoById(1)).toBeDefined();
      expect(service.getTodoById(2)).toBeDefined();
    }));
  });

  describe('#update(id, todo)', () => {
    it('should return null if todo not found', inject([TodoService], (service: TodoService) => {
      let todo = new Todo({ title: 'Todo to update' });
      let updatedTodo = service.updateTodoById(9999, todo);

      expect(updatedTodo).toBeNull();
    }));

    it('should update properties provided', inject([TodoService], (service: TodoService) => {
      service.addTodo('Todo 1');

      let updatedTodo = service.updateTodoById(1, {
        title: 'Todo updated'
      });

      expect(updatedTodo.title).toEqual('Todo updated');
    }));
  });

  describe('#deleteTodoById(id)', () => {
    it('should remove todo with the corresponding id', inject([TodoService], (service: TodoService) => {
      service.addTodo('Todo 1');

      expect(service.getAllTodos().length).toEqual(1);

      service.deleteTodoById(1);
      expect(service.getAllTodos().length).toEqual(0);
    }));

    it('should not removing anything if todo  is not found', inject([TodoService], (service: TodoService) => {
      service.addTodo('Todo 1');
      expect(service.getAllTodos().length).toEqual(1);

      service.deleteTodoById(3);
      expect(service.getAllTodos().length).toEqual(1);
    }));
  });

  describe('#toogleTodoById(id)', () => {
    it('should return the updated todo with inverse complete status', inject([TodoService], (service: TodoService) => {
      service.addTodo('Todo 1');
      let updatedTodo = service.toogleTodoById(1);

      expect(updatedTodo.complete).toEqual(true);

      service.toogleTodoById(1);
      expect(updatedTodo.complete).toEqual(false);
    }));
  });
});
