import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  user: any





  constructor(private ds: DataService, private fb: FormBuilder) {
    this.user = this.ds.currentUser
  }

  depositeForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    amnt: ['', [Validators.required, Validators.pattern('[0-9]+')]]

  })

  withdrawForm = this.fb.group({
    acno1: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw1: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    amnt1: ['', [Validators.required, Validators.pattern('[0-9]+')]]

  })

  deposite() {

    var acno = this.depositeForm.value.acno
    var psw = this.depositeForm.value.psw
    var amnt = this.depositeForm.value.amnt
    if (this.depositeForm.valid) {
      const result = this.ds.deposite(acno, psw, amnt)
      if (result) {
        alert(`your ac hsa been credited with amount ${amnt} and current balance is ${result}`)
      }
      else {
        alert("incurrect acno or password")
      }
    }
    else {
      alert('invalid form')
    }

  }

  withdraw() {
    var acno = this.withdrawForm.value.acno1
    var psw = this.withdrawForm.value.psw1
    var amnt = this.withdrawForm.value.amnt1
    if (this.withdrawForm.valid) {
      const result = this.ds.withdraw(acno, psw, amnt)
      if (result) {
        alert(`your ac hsa been debited by amount ${amnt} and current balance is ${result}`)
      }
      else {
        alert("incurrect acno or password")
      }

    }
    else {
      alert('invalid form')
    }
  }
}
