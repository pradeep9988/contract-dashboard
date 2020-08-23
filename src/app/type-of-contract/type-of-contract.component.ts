import { Component, OnInit } from '@angular/core';
import { NewContractComponent } from '../new-contract/new-contract.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type-of-contract',
  templateUrl: './type-of-contract.component.html',
  styleUrls: ['./type-of-contract.component.css']
})
export class TypeOfContractComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navToNewContract(){
    this.router.navigate(['new-contract'])
  }
  navToRenewal(){
    this.router.navigate(['contract-renewal'])
  }
  navToTermination(){
    this.router.navigate(['contract-termination'])
  }

}