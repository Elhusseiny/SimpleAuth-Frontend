import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-pm',
  templateUrl: './pm.component.html'
})
export class PmComponent implements OnInit {
  board: string;
  errorMessage: string;
  info: any;
  times: string[];


  

  constructor(private userService: UserService , private token: TokenStorageService) {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    //this.getUserHistory(this.info.username);
   }

  ngOnInit() {
    
  }



  

}



