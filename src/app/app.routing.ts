import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home/home.routing';
import { AboutRoutingModule } from './about/about.routing';
import { TodoRoutingModule } from './todo/todo.routing';

@NgModule({
  imports: [HomeRoutingModule, AboutRoutingModule, TodoRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
