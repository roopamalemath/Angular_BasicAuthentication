import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todoService/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  constructor(
    public id: number,
    public description: String,
    public isDone: Boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

 todos: Todo[]
 message : string

  //todos = [
    //new Todo(1, 'learning Angular 7', false, new Date()) ,
    //new Todo(2,'learning Angular 7',false,new Date())    
  
    //{ id:1, description : 'learning Angular 7'},
    //{ id:2, description : 'learning jquery'}
  //]

  constructor(private todoDataService: TodoDataService,
              private router: Router) { }

  ngOnInit() {
    this.refreshTodos()
  }

  deleteTodo(id){
   this.todoDataService.deleteTodo('in28Minutes',id).subscribe(
     response => {
       console.log(response)
       this.message=`Delete of Todo ${id} successful!`
       this.refreshTodos()
     }
   )
  }

  refreshTodos() {
    this.todoDataService.RetrieveAllTodo('in28Minutes').subscribe(
      data =>
      { 
        this.todos=data
       //console.log(data)
      }
     )
  }
  
  updateTodo(id){
    this.router.navigate(['addandedittodo',id])
  }

  save(){
    // -1 user has adding a new todo 
    this.router.navigate(['addandedittodo',-1])
  }

}
