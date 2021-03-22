import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DatabaseService } from 'src/app/services/database.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  users: User[] = [];

  user = {};

  selectedView = 'users';

  constructor(private db: DatabaseService) { }

  ngOnInit() {
    console.log("database state", this.db.getDatabaseState);
    
    this.db.getDatabaseState().subscribe(ready => {
      if (ready) {
        this.db.getUsers().subscribe(data => {
          console.log('users: ', data);
          this.users = data;
        });
      }
    })
  }

  addUser() {
    this.db.addUser(this.user['name'], this.user['age'])
    .then(_ => {
      this.user = {};
    });
  }

}
