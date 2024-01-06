import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  

  signup: any[] =[];

  signupObj : any = {
    username : '',
    email : '',
    password : '',
  }

  loginObj : any ={
    username :'',
    password : '',
  }

  emailexist : string;
  invaliduser : string;

  
  constructor(private router: Router) {}
  ngOnInit(): void {

    const ldata = localStorage.getItem('signup');
    if(ldata!= null){
      this.signup= JSON.parse(ldata);
    }

  }
  OnSignup(){
    if(this.signupObj.username && this.signupObj.password && this.signupObj.email)
    {
      const lodata=JSON.parse(localStorage.getItem('signup'))
      const emailexist = lodata && lodata.some(user => user.email == this.signupObj.email)
      if(emailexist)
      {
        this.emailexist = 'Mail already Exist';
      }

      if(this.signupObj.password.length <= 8){
        var errorMessage = document.getElementById('error-message2');
        errorMessage.textContent = 'Give atleast 8 characters';
        console.log('Give atleast 8 characters');
      }

      else{
    this.signup.push(this.signupObj);
    localStorage.setItem('signup',JSON.stringify(this.signup));
    //this.router.navigate(['/home'])
     this.signupObj = {
       username : '',
      email : '',
       password : '',
     }
  }

  }
  else{
    var errorMessage = document.getElementById('error-message');
    errorMessage.textContent = 'Fill the required input fields';
    console.log('Fill the required input fields');
}
  }

Onlogin(){

  const isuser = this.signup.find(m => m.username == this.loginObj.username && m.password == this.loginObj.password);

  // const locdata=JSON.parse(localStorage.getItem('signup'))
  // const invaliduser = locdata && locdata.some(user => (user.email == this.loginObj.email && user.password != this.loginObj.password) || (user.email == this.loginObj.email && user.password != this.loginObj.password))
  // if(invaliduser)
  // {
  //   this.invaliduser = 'Invalid User';
  // }
if(this.loginObj.username == '' || this.loginObj.password=='')
{

  var errorMessage = document.getElementById('error-message1');
    errorMessage.textContent = 'Fill the required input fields';
    console.log('Fill the required input fields');
}

  else if (isuser != undefined){
    this.router.navigate(['/home'])
  }

  else
  {
    this.invaliduser = 'Invalid Username or password';
  }

}
showpwd: any;

  passwordToggle(){
    this.showpwd = !this.showpwd;
  }

}
