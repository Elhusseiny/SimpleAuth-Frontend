import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  board: string;
  errorMessage: string;
  info: any;
  test : string ;
  times: string[];

  constructor(private userService: UserService , private token: TokenStorageService) { 


  }

  ngOnInit() {
    
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.getUserHistory(this.info.username);
    this.test= "mohamed" ;
    console.log(this.test) ;
    
    
  }
  
  getUserHistory(username: string) {
    console.log('we are inside getUser History') ;
     this.userService.getUserHistory(username).subscribe(
      data => {
        console.log('data is ') ;
        console.log(data);
        this.times = data.time;
        console.log(this.times) ;
      },
      error => {
  
        console.log(error) ;
      }
  
    ) ;
  }
}
