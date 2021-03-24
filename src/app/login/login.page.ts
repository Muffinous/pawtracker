import { Component, ContentChild, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';
import {Router} from '@angular/router'; 

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

  constructor(private route:Router) { }

  ngOnInit() {
  }

  toggleShow() {
    this.showPassword = !this.showPassword;
  }
  
  login(){
    console.log('submitted');
    console.log(this.username);
    console.log(this.password);
    this.route.navigate(['/home']);
  }
}