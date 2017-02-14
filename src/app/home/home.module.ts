import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home.routing';
import { HomeComponents } from './home.components';

@NgModule({
  imports: [HomeRoutingModule],
  declarations: [HomeComponents]
})
export class HomeModule { }
