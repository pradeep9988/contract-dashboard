import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contract-termination',
  templateUrl: './contract-termination.component.html',
  styleUrls: ['./contract-termination.component.scss']
})
export class ContractTerminationComponent implements OnInit {
  showAlertBox: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navToConLib(){
    this.router.navigate(['contracts-library'])
  }
  navToConInsights(){
    this.router.navigate(['contract-insights'])
  }
  continueToHome(){
    this.router.navigate(['contracts-library', {fromTerminate: true}])
  }
  terminateContract(){
    this.showAlertBox = true;
  }
  closeAlert(){
    this.showAlertBox = false;
  }

}