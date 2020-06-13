import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../loginservice/hardcoded-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //isUserLoggedIn : boolean = false

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
    //this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserloggedIn()
  }

}
