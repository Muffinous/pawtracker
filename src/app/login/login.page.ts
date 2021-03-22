import { Component, ContentChild, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  showPassword = false;
  passwordToggleIcon = 'eye';
  username: string;
  password: string;

  @ContentChild(IonInput) input: IonInput;

  constructor() { }

  ngOnInit() {
  }

  toggleShow() {
    this.showPassword = !this.showPassword;
  }
  
  login(){
    console.log('submitted');
    console.log(this.username);
    console.log(this.password);
  }
}