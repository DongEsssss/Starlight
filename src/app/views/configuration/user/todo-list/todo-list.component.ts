import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, TodoService } from 'src/app/services/TodoService/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Observable<Todo[]>;
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos = this.todoService.todos;
  }

  completeTask(event: any, index) {
    console.log(event.checked);
    this.todoService.updateList(index, event.checked);
  }

  deleteTask(todoId: number) {
    this.todoService.delete(todoId);
  }
}
