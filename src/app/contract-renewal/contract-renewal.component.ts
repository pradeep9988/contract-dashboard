import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contract-renewal',
  templateUrl: './contract-renewal.component.html',
  styleUrls: ['./contract-renewal.component.css']
})
export class ContractRenewalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navToRenewalDetails(){
    this.router.navigate(['contract-renewal-details'])
  }
  navToConLib(){
    this.router.navigate(['contracts-library'])
  }
  navToConInsights(){
    this.router.navigate(['contract-insights'])
  }

}