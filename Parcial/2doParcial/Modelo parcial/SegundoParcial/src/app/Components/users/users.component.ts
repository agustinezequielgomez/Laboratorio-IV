import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../Services/admin.service';
import { User } from 'src/app/Classes/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: User[];
  public column: string[];
  constructor(private admin: AdminService) { }

  ngOnInit() {
    this.admin.getUsers().subscribe((response) => {
      this.users = response;
      this.column = Object.keys(response[0]);
    });
  }

}
