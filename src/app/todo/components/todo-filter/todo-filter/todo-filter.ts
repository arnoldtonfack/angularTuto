import { Component, inject } from '@angular/core';
import { TodoService } from '../../../service/todo';

@Component({
  selector: 'app-todo-filter',
  imports: [],
  templateUrl: './todo-filter.html',
  styleUrl: './todo-filter.scss',
})
export class TodoFilter {
  private readonly todoService = inject(TodoService)
  
  filter = this.todoService.filter


}
