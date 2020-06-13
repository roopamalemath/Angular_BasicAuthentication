import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginnComponent } from './loginn/loginn.component';
import { WelcomeeComponent } from './welcomee/welcomee.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './routeGuardService/route-guard.service';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [
  {path:'',component:LoginnComponent},
  {path:'login',component:LoginnComponent},
  {path:'welcome/:name',component:WelcomeeComponent, canActivate:[RouteGuardService]},
  {path:'listtodos',component:ListTodosComponent, canActivate:[RouteGuardService]},
  {path:'logout',component:LogoutComponent},
  {path:'addandedittodo/:id', component:TodoComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
