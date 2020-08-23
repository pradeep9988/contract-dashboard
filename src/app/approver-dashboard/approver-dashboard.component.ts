import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approver-dashboard',
  templateUrl: './approver-dashboard.component.html',
  styleUrls: ['./approver-dashboard.component.css']
})
export class ApproverDashboardComponent implements OnInit {
  // @HostListener('click', ['$event'])
  // onClick(event) {
  //   if(event.target.id=='renewal'){
  //     this.router.navigate(['contract-renewal-details'])
  //   }
  //   event.preventDefault();
  // }
  constructor(private router: Router) { }

  ngOnInit() {
  }
   navToConLib(){
    this.router.navigate(['contracts-library'])
  }
  navToConInsights(){
    this.router.navigate(['contract-insights'])
  }

}