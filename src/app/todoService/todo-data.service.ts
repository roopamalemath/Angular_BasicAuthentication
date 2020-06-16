import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../list-todos/list-todos.component';
import { API_URL, TODO_JPA_API_URL } from '../app.constants';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient: HttpClient) { }

  RetrieveAllTodo(username){
    //the response we are getting is list of todos so
    //when we have change from one environment to another we have to change every file so we create
    // constant value in ts file and there we are accessing the value 
    //return this.httpClient.get<Todo[]>(`http://localhost:8051/users/${username}/todos`)
    return this.httpClient.get<Todo[]>(`${TODO_JPA_API_URL}/users/${username}/todos`)
  }

  deleteTodo(username,id){
    return this.httpClient.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`)
  }

  RetrieveTodo(username,id){
    return this.httpClient.get<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`)
  }

  UpdateTodo(username,id,todo){
    return this.httpClient.put<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`,todo)
  }

  CreateTodo(username, todo){
    return this.httpClient.post(`${TODO_JPA_API_URL}/users/${username}/todos`,todo)
  }
}
