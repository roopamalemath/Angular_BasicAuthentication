import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../loginservice/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../loginservice/basic-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
    this.basicAuthenticationService.logout()
  }

}
