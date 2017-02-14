import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TodoComponents } from './todo.components';
import { TodoService } from './services/todo.service';

@NgModule({
  imports: [SharedModule],
  declarations: [TodoComponents],
  providers: [TodoService]
})
export class TodoModule { }
