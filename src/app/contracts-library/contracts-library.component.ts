import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contracts-library',
  templateUrl: './contracts-library.component.html',
  styleUrls: ['./contracts-library.component.css']
})
export class ContractsLibraryComponent implements OnInit {
  showRenewed: boolean = false;
  showTerminated: boolean = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      if(params.fromRenewal){
      this.showRenewed = params.fromRenewal;
      }
      if(params.fromTerminate){
        this.showTerminated = params.fromTerminate;
      }
    })
  }

}