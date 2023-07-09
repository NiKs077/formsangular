import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-formexercise',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormExerciseComponent {
  @ViewChild('f') signUpForm:NgForm;
  defaultSubscription="advanced";
  validPassword="";
  passwordLengthValid=false;

  passwordLengthValidCheck(){
    return  this.passwordLengthValid=this.validPassword.length>6?true:false;
  }
  onSubmit(){
    console.log(`email is ${this.signUpForm.value.email}
    subscription is ${this.signUpForm.value.subscription}
    password is ${this.signUpForm.value.password} `);
  }
}
