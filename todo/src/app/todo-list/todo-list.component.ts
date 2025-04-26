import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  taskArray = [
    {
      taskName: 'Adicionar tarefas',
      isCompleted : false
    },
    {
      taskName: ' fazer exercicios',
      isCompleted : false
    }
  ];

  onSubmit(form: NgForm){
    console.log(form);
  }

}
