import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { TODOS } from './mock-todos';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private messageService:MessageService) { }

  getTodos(): Observable<Todo[]> {
    const todos=of(TODOS);
    this.messageService.add('TodoService: fetched todos ააა');
    return todos;
  }
  getTodo(id:number):Observable<Todo>{
    const todo=TODOS.find(t=>t.id === id)!;
    this.messageService.add(`TodoService:gadmotanili ${todo.id}`);
    return of(todo);
    }
}
