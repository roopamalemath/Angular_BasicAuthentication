import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../app.constants';

export class HelloWorldBean {
  constructor(public message: String) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor(private httpclient: HttpClient) { }

  executeHelloWorldBean() {
    return this.httpclient.get<HelloWorldBean>(`${API_URL}/hello-world-Bean`)
  }

  executePathVariableHelloWorldBean(username) {
    /*let basicAuthHeaderString = this.createBasicAuthenticationHeader()
    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })*/
    return this.httpclient.get<HelloWorldBean>(`${API_URL}/hello-world/path-variable/${username}`)
      //{ headers: header })
  }

  /*createBasicAuthenticationHeader() {
    let username = 'in28Minutes'
    let password = 'dummy'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)
    return basicAuthHeaderString
  }*/


}
