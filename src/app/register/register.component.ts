import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

uname:any  
acno:any
pasw:any




constructor(private ds:DataService,private router:Router){ }

register(){
  // alert('register success')

  let userDetails=this.ds.userDetails
  var uname=this.uname
  var acno=this.acno
  var pasw=this.pasw

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
}
