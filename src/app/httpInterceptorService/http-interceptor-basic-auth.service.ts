import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from '../loginservice/basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(private basicAuthenticationService: BasicAuthenticationService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // let username = this.basicAuthenticationService.getAuthenticatedUser()
    // let password = 'dummy'
    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)
    
    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken()
    let username = this.basicAuthenticationService.getAuthenticatedUser()
    // if both of these having proper value then add authorization header and execute the request
    if(basicAuthHeaderString && username){
    request=request.clone({
      setHeaders: {
        Authorization: basicAuthHeaderString
      }
    })
  }
    // otherwise http handler execute the request
    return next.handle(request)
  }
}
