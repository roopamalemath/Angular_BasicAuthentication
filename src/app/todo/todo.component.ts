import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from '../todoService/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo_id: number
  todo: Todo

  constructor(private activatedRoute: ActivatedRoute,
    private todoDataService: TodoDataService,
    private router: Router) { }

  ngOnInit() {
    this.todo = new Todo(this.todo_id, '', false, new Date())
    this.todo_id = this.activatedRoute.snapshot.params['id']
    if (this.todo_id != -1) {
      this.todoDataService.RetrieveTodo('in28Minutes', this.todo_id).subscribe(
        response => {
          //console.log(response)
          this.todo = response
        }
      )
    }
  }

  save() {
    //console.log(this.todo.description)
    //console.log(this.todo.targetDate)
    // when it is new todo no do call the retrieve todo service to get the details of the given parameter
    if (this.todo_id === -1) {
      // create todo
      this.todoDataService.CreateTodo('in28Minutes', this.todo).subscribe(
        response => {
          console.log(response)
          this.router.navigate(['listtodos'])
        }
      )
    } else {
      // update todo
      this.todoDataService.UpdateTodo('in28Minutes', this.todo_id, this.todo).subscribe(
        response => {
          console.log(response)
          this.router.navigate(['listtodos'])
        }
      )
    }
  }

}
