import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("f") signUpForm:NgForm;
  defaulSelectedProperty:string="pet";
  submitted=false;
  answer="";
  genders=["male", "female", "transgender"];
  userInfo={
    username:"",
    email:"",
    secret:"",
    informationAboutSelectedType:""
  }
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  // onSubmit(f:HTMLFormElement){
  //   console.log(f);
  // }
    onSubmit(){
      this.submitted=true;
      console.log(this.signUpForm);
    this.userInfo.username=this.signUpForm.value.userData.username;
    this.userInfo.email=this.signUpForm.value.userData.email;
    this.userInfo.secret=this.signUpForm.value.secret;
    this.userInfo.informationAboutSelectedType=this.signUpForm.value.informationAboutSelectedType;

    this.signUpForm.reset();
  }


}
