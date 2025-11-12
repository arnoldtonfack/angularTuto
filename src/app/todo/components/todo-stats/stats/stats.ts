import { Component, inject } from '@angular/core';
import { TodoService } from '../../../service/todo';

@Component({
  selector: 'app-stats',
  imports: [],
  templateUrl: './stats.html',
  styleUrl: './stats.scss',
})
export class Stats {
private readonly todoService = inject(TodoService)

  stats = this.todoService.stats
}
