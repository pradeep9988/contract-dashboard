import { Component, OnInit } from '@angular/core';
// import moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate-contract',
  templateUrl: './generate-contract.component.html',
  styleUrls: ['./generate-contract.component.css']
})
export class GenerateContractComponent implements OnInit {
  formObj:any = {};
  secondyearfee:any = '';
  thirdyearfee:any = '';
  constructor(private router: Router) { }

  ngOnInit() {
    this.formObj = JSON.parse(sessionStorage.getItem('formValue'));
    let date = new Date(this.formObj.date).toLocaleDateString();
    this.formObj.date = date;
    this.secondyearfee = Number(this.formObj.agreedFee) + (Number(this.formObj.agreedFee)/100)*Number(this.formObj.incrementPer);
    this.thirdyearfee =  Number(this.secondyearfee) + (Number(this.secondyearfee)/100)*Number(this.formObj.incrementPer);
    this.secondyearfee = Number(this.secondyearfee).toFixed(2);
    this.thirdyearfee = Number(this.thirdyearfee).toFixed(2);
  }
  navToAppDash(){
    this.router.navigate(['contracts-library'])
  }

}