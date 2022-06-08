import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials= {
    email: '',
    password: ''
  }
  constructor(
    private auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
  }

  showAlert = false;
  alertMsg = 'Please wait while you are being logged in!'
  alertColor = 'blue'
  inSubmission = false


  async login() {
    this.showAlert = true;
    this.alertColor = 'blue'
    this.alertMsg = 'Please wait while you are being logged in!'
    this.inSubmission = true
    try {
     await this.auth.signInWithEmailAndPassword(
        this.credentials.email,  this.credentials.password
      )
    } catch (e: any) {
      var errorCode = e.code;
      this.inSubmission = false;
      switch (errorCode) {
        case 'auth/invalid-email':
          this.alertMsg = 'Email is invalid'
          break;
        case 'auth/user-disabled':
          this.alertMsg = 'User email have been disabled'
          break;
        case 'auth/user-not-found':
          this.alertMsg = 'User not found with the email provided.'
          break;
        case 'auth/wrong-password':
          this.alertMsg = 'Incorrect Password'
          break;
        default:
          this.alertMsg ='Uncaught Error! Please try again'
        
      }
      this.alertColor = 'red'
      return
    }  
    
    this.alertMsg = 'Success! You are logged in!'
    this.alertColor ='green'
  }
}
