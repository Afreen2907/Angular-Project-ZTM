import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { EmailTaken } from '../validators/email-taken';
import { RegisterValidators } from '../validators/register-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private auth: AuthService,
    private emailTaken: EmailTaken
  ) { }

  showAlert = false;
  alertMsg = 'Please wait! Your account is being created'
  alertColor = 'blue'
  inSubmission = false

  name= new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ])
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ], [this.emailTaken.validate])
  age = new FormControl('', [
    Validators.required,
    Validators.min(18),
    Validators.max(100)
  ])
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ])
  confirm_password = new FormControl('', [
    Validators.required
  ])
  phoneNumber = new FormControl('', [
    Validators.required,
    Validators.minLength(13),
    Validators.maxLength(13)
  ])


  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password,
    phoneNumber: this.phoneNumber
  }, [RegisterValidators.match('password', 'confirm_password')])

  

 
  
 async register() {
    this.showAlert = true
    this.alertMsg = 'Please wait! Your account is being created'
   this.alertColor = 'blue'
   this.inSubmission = true
   
   
    
   try {
    await this.auth.creatorUser(this.registerForm.value)
   } catch (e: any) {
   
     this.inSubmission = false;
     
     var errorCode = e.code;
  
     switch (errorCode) {
       case 'auth/weak-password':
         this.alertMsg = 'The password is too weak';
         break;
       case 'auth/invalid-email':
         this.alertMsg = 'The email is already in use';
         break;
       default:
         this.alertMsg ='Uncaught Error! Please try again'
     }
    
     
     this.alertColor = 'red'
     this.inSubmission = false
     return
   }

   this.alertMsg = 'Success Your account has been created'
   this.alertColor = 'green'
   
  }
 
}
