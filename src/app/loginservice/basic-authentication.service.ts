import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const AUTHENTICATED_USER="authenticatedUser"
export const TOKEN="token"

export class AuthenticationBean {
  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private httpClient: HttpClient) { }



  // login authentication check
  /*authenticate(username, password) {
    //console.log(this.isUserloggedIn())
    if (username === 'in28Minutes' && password === 'dummy') {
      sessionStorage.setItem('authenticatedUser',username)
      //console.log(this.isUserloggedIn())
      return true
    } else {
      return false
    }
  }*/



  executeJWT_AuthenticationService(username, password) {
     return this.httpClient.post<any>(`${API_URL}/authenticate`
     , {username, password}
          // if header is successful then continue with pipe method, 
      // pipe method allows you to what should be done if the request succeeds or if the request fails 
     ).pipe(
        // if there is a proper response back then map it
        map(
          //when we get the data back sucessfully, we have set the username in sessionstorgae 
          // return back the data back where this method is called (who ever subcribing to it will get the data)
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username)
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`)
            return data
          }
        )
      )
  }


  // to valid the authentication ob both basic authentication and sessionstorage
  executeBasic_AuthenticationService(username, password) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)
    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.httpClient.get<AuthenticationBean>(`${API_URL}/basicauth`,
      // if header is successful then continue with pipe method, 
      // pipe method allows you to what should be done if the request succeeds or if the request fails 
      { headers: header }).pipe(
        // if there is a proper response back then map it
        map(
          //when we get the data back sucessfully, we have set the username in sessionstorgae 
          // return back the data back where this method is called (who ever subcribing to it will get the data)
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username)
            sessionStorage.setItem(TOKEN, basicAuthHeaderString)
            return data
          }
        )
      )
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken() {
    return sessionStorage.getItem(TOKEN)
  }

  isUserloggedIn() {
    let name = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(name === null)
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }

}
