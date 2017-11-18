import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DisplayTodoListComponent } from './Todos/display-todo-list/display-todo-list.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    DisplayTodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [DisplayTodoListComponent]
})
export class AppModule { }
