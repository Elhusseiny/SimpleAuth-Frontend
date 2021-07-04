import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {
  
  registered: string[];
  loggedIns: string[];
  info: any;

  constructor(private adminService: AdminService , private token: TokenStorageService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };  

    this.getRegisteredUsers();
    this.getLoggedInUsers();

  }

  getRegisteredUsers()
  {
    return this.adminService.getRegisteredUsers().subscribe(
      data => {
        this.registered = data;
        console.log("data is " + data);
      },
      error => {
        console.log(error);
      }) ;
  } 

  getLoggedInUsers()
  {
    return this.adminService.getLoggedInUsers().subscribe(
      data => {
        this.loggedIns = data;
        console.log("data is " + data);
      },
      error => {
        console.log(error);
      }) ;
  } 




}
