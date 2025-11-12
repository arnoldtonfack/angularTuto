import { Component } from '@angular/core';
import { TodoService } from '../../../service/todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  imports: [FormsModule],
  templateUrl: './todo-add.html',
  styleUrl: './todo-add.scss',
})
export class TodoAdd {

  constructor(private todoService: TodoService) {}

   newTitle = ""
  addTodo(title: string) {
    this.todoService.add(title);
    this.newTitle = "";
  }

}
