import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data="your perfect banking patner"
  iclass="form-control"

  acno:any
  pasw:any
  
 
  constructor(private router:Router,private ds:DataService) { }
  
  ngOnInit(): void {
    
  }

  login(){
    var acnum=this.acno
    var psw=this.pasw
   
    const result=this.ds.login(acnum,psw)
    if(result){
      alert('login success')
      this.router.navigateByUrl('dashboard')
    }
    else{
      alert("incurrect username or password")
    }
  }

  // login(a:any,b:any){

  //   var acnum=a.value
  //   var psw=b.value
  //   var userDetails=this.userDetails
  //   if(acnum in userDetails){
  //     if(psw==userDetails[acnum]["password"]){
  //       alert("login success")
  //     }
  //     else{
  //       alert("incurrect password")
  //     }

  //   }
  //   else{
  //     alert("account num incurrect or not registerd yet")
  //   }
  // }
 
  // acnoChange(event:any){
  //   this.acno=event.target.value;
  //   // console.log(this.acno);
    
  // }
  // paswChange(event:any){
  //   this.pasw=event.target.value
  //   // console.log(this.pasw);
    
  // }

}


