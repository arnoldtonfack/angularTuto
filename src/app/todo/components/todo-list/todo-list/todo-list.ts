import { Component, inject } from '@angular/core';
import { TodoService } from '../../../service/todo';
import { Stats } from "../../todo-stats/stats/stats";

@Component({
  selector: 'app-todo-list',
  imports: [Stats],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {

  private readonly todoService = inject(TodoService)

  stats = this.todoService.stats
  todos = this.todoService.filteredTodos



  removeTodo(id: string) {
    console.log("Appel de removeTodo avec ID :", id);
    this.todoService.remove(id);
  }

  renameTodo(id:string, title:string) {
    this.todoService.rename(id, title)
  }

  toggleTodo (id: string) {
    this.todoService.toggle(id);
  }
}
