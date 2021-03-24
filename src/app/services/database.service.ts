// import { Injectable } from '@angular/core';
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
// import { Platform } from '@ionic/angular';
// import { User } from '../models/user';

// @Injectable({
//   providedIn: 'root'
// })

// export class DatabaseService {
//   private database: SQLiteObject;
//   private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

//   users = new BehaviorSubject([]);
//   namesList = new BehaviorSubject([]);

//   constructor(private plt: Platform, private sqlitePorter: SQLitePorter, private sqlite: SQLite, private http: HttpClient) {

//     this.plt.ready().then(() => {
//       this.sqlite.create({
//         name: 'pawkiller.db',
//         location: 'default'
//       })
//       .then((db: SQLiteObject) => {
//           this.database = db;
//           this.seedDatabase();
//       });
//     });
//   }
 
//   seedDatabase() {
//     this.http.get('assets/seed.sql', { responseType: 'text'})
//     .subscribe(sql => {
//       this.sqlitePorter.importSqlToDb(this.database, sql)
//         .then(_ => {
//           this.loadUsers();
//           this.dbReady.next(true);
//         })
//         .catch(e => console.error(e));
//     });
//   }
 
//   loadUsers() {
//     return this.database.executeSql('SELECT * FROM users', []).then(res => {
//       let users: User[] = [];

//       if (res.rows.length > 0) {
//         for (var i =0; i < res.rows.length; i++) {
//           users.push({
//             id: res.rows.item(i).id,
//             name: res.rows.item(i).name,
//             age: res.rows.item(i).age
//           })
//         }
//       }
//       this.users.next(users);
//     })
//   }

//   getDatabaseState() {
//     return this.dbReady.asObservable();
//   }

//   getUsers(): Observable<User[]> {
//     return this.users.asObservable();
//   }

//   addUser(name, age) {
//     let data = [name, age];
//     return this.database.executeSql('INSERT INTO users (name, age) VALUES (?, ?)', data).then(data => {
//       this.loadUsers();
//     });
//   }

//   getUser(id): Promise<User> {
//     return this.database.executeSql('SELECT * users WHERE id = ?', [id]).then(data => {
//       return {
//         id: data.rows.item(0).id,
//         name: data.rows.item(0).name,
//         age: data.rows.item(0).age
//       }
//     });
//   }
// }
