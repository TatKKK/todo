import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
 
  todos: Todo[]=[];

  constructor(private todoService:TodoService, private messageService: MessageService){}

  ngOnInit():void{
    this.getTodos();
  }  

  getTodos():void{
    this.todoService.getTodos()
    .subscribe(todos=>this.todos=todos);
  }

}
