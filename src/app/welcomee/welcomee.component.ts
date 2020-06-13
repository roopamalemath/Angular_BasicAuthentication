import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeService } from '../welcomedataservice/welcome.service';



@Component({
  selector: 'app-welcomee',
  templateUrl: './welcomee.component.html',
  styleUrls: ['./welcomee.component.css']
})
export class WelcomeeComponent implements OnInit {
  username = ''
  welcomeMessageFromService: String
  errorMessage: String

  constructor(private router: ActivatedRoute,
    private welcomeService: WelcomeService) { }

  ngOnInit() {
    this.username = this.router.snapshot.params['name']
  }

  getWelcomeMessage() {
    this.welcomeService.executeHelloWorldBean().subscribe(

      response => {
        console.log(response.message)
        this.handleSuccessfulResponse(response)
      },

      error => {
        //console.log(error)
        //console.log(error.error);
        //console.log(error.error.message)
        this.handleErrorResponse(error)
      }
    )
  }

  getWelcomeMessageWithPathVariable() {
    this.welcomeService.executePathVariableHelloWorldBean(this.username).subscribe(
      response => {
        //console.log(response)
        this.handleSuccessfulResponse(response)
      },
      error => {
        this.handleErrorResponse(error);
      }
    )
  }

  handleSuccessfulResponse(response){
    this.welcomeMessageFromService=response.message
  }

  handleErrorResponse(error) {
    this.errorMessage = error.error.message
  }
}

