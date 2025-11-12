import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from './todo/service/todo';
import { Header } from "./todo/components/header/header";
import { TodoAdd } from "./todo/components/todo-add/todo-add/todo-add";
import { TodoFilter } from './todo/components/todo-filter/todo-filter/todo-filter';
import { TodoList } from "./todo/components/todo-list/todo-list/todo-list";

@Component({
  selector: 'app-root',
  imports: [FormsModule, Header, TodoAdd, TodoFilter, TodoList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('we-lovetodos');
}
