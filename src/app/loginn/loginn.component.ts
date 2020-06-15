import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../loginservice/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../loginservice/basic-authentication.service';

@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.css']
})
export class LoginnComponent implements OnInit {

  username = 'in28minutes'
  password = ''
  invalid = false
  message = 'invlaid credentials'

  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
  }

  submit() {
    //if(this.username==='roopa' && this.password==='roopa'){
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      console.log(this.username)
      this.router.navigate(['welcome', this.username])
      this.invalid = false
    } else {
      this.invalid = true
    }
  }

  handleBasicAuth() {
    //if(this.username==='roopa' && this.password==='roopa'){
    this.basicAuthenticationService.executeBasic_AuthenticationService(this.username, this.password).subscribe(
      response => {
        console.log(response)
        this.router.navigate(['welcome', this.username])
        this.invalid = false
      },

      error => {
        console.log(error)
        this.invalid = true
      }
      )
  }

  handleJwtAuth() {
    //if(this.username==='roopa' && this.password==='roopa'){
    this.basicAuthenticationService.executeJWT_AuthenticationService(this.username, this.password).subscribe(
      response => {
        console.log(response)
        this.router.navigate(['welcome', this.username])
        this.invalid = false
      },

      error => {
        console.log(error)
        this.invalid = true
      }
      )
  }


}
