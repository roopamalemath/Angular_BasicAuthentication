import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  
  constructor() { }

  // login authentication check
  authenticate(username, password) {
    //console.log(this.isUserloggedIn())
    if (username === 'in28Minutes' && password === 'dummy') {
      sessionStorage.setItem('authenticatedUser',username)
      //console.log(this.isUserloggedIn())
      return true
    } else {
      return false
    }
  }

  isUserloggedIn(){
    let name=sessionStorage.getItem('authenticatedUser')
    return !(name === null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
  }

}
