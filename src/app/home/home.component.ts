import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../auth/token-storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  info: any;
  status: any ;

  constructor(private token: TokenStorageService , private userService: UserService ) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }

  logout() {
    console.log('logout requested') ;
    console.log(this.info.username) ;
    this.userService.signoutUser(this.info.username).subscribe(
      data => {
        this.status = data;
        console.log("data is " + data);
      },
      error => {
        console.log(error);
      }) ;
    this.token.signOut();
    window.location.reload();
  }
}
