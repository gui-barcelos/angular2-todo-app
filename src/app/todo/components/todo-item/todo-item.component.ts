import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
    selector: 'app-todo-item',
    template: `
    <md-checkbox (click)="toggle(todo.id)" 
                [checked]="todo.complete" 
                [class.completed]="todo.complete">
    {{todo.title}}
    </md-checkbox>
    <button md-mini-fab (click)="remove(todo.id)">
            <md-icon class="md-24">delete</md-icon>
    </button>
    `
})
export class TodoItemComponent implements OnInit {
    @Input()
    todo: Todo;

    @Output()
    onRemove: EventEmitter<number> = new EventEmitter<number>();

    @Output()
    onToggle: EventEmitter<number> = new EventEmitter<number>();

    remove(id) {
        this.onRemove.emit(id);
    }

    toggle(id) {
        this.onToggle.emit(id);
    }

    constructor() { }

    ngOnInit() {
        console.log('Todo Item Component Injected!!');
    }
}
