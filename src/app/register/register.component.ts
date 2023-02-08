import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {







constructor(private ds:DataService,private router:Router,private fb:FormBuilder){ }

//create reactive form for register form
registerFrom=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
  psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
})

register(){
  // alert('register success')

  let userDetails=this.ds.userDetails
  var uname=this.registerFrom.value.uname
  var acno=this.registerFrom.value.acno
  var pasw=this.registerFrom.value.psw
  if(this.registerFrom.valid){
  const result=this.ds.register(uname,acno,pasw)

  if(result){
    alert('registerd')
    this.router.navigateByUrl("")
    
  }
  else{
    alert('acno already present')
  }
  // console.log(uname,acno,pasw);
}
else{
  alert('invalid form')
}
}  
}
