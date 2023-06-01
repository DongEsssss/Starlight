import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DefaultComponent } from 'src/app/components/default.component';
import { TodoService } from 'src/app/services/TodoService/todo.service';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent extends DefaultComponent {
  todoForm: FormGroup;

  override ngOnInit() {
    this.todoForm = this.formBuilder.group({
      todo: ['', Validators.required],
    });
  }

  addTasks() {
    this.todoService.create({
      value: this.todoForm.controls['todo'].value,
      completed: false,
    });
    this.todoForm.reset();
  }
}
