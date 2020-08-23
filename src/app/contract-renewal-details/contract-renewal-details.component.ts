import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contract-renewal-details',
  templateUrl: './contract-renewal-details.component.html',
  styleUrls: ['./contract-renewal-details.component.scss']
})
export class ContractRenewalDetailsComponent implements OnInit {

  contractRenewal: FormGroup = null;
  notSelectedFA: boolean = false;
  showAlertBox: boolean = false;
  // mainData: any;
  loaded: boolean = false;
  mainData = {
    regionData: [
      {value:'North West', name: 'North West'},
      {value:'North East', name: 'North East'},
      {value:'East', name: 'East'}
    ],
    northWestData: [
      {value:'Chicago', name: 'Chicago'},
      {value:'St. Louis', name: 'St. Louis'},
      {value:'Kansas City', name: 'Kansas City'}
    ],
    northEastData: [
      {value:'Boston', name: 'Boston'},
      {value:'Providence', name: 'Providence'},
      {value:'New Havens', name: 'New Havens'}
    ],
    eastData: [
      {value:'Norfolk', name: 'Norfolk'},
      {value:'Washington DC', name: 'Washington DC'},
      {value:'Virginia Beach', name: 'Virginia Beach'}
    ],
    documentType: [
      {value:'FA', name: 'FA'},
      {value:'Offset TRA', name: 'Offset TRA'},
      {value:'PAF Letters', name: 'PAF Letters'},
      {value:'A# Letter', name: 'A# Letter'},
      {value:'BK# Letter', name: 'BK# Letter'},
    ],
    pafSubType: [
      {value:'Objection Response Letter', name: 'Objection Response Letter'},
      {value:'Limited Release - STS', name: 'Limited Release - STS'},
      {value:'Limited Release - NonSTS', name: 'Limited Release - NonSTS'},
      {value:'Final Proceed Letter - ADR', name: 'Final Proceed Letter - ADR'},
      {value:'Final Proceed Letter - NonADR', name: 'Final Proceed Letter - NonADR'},
    ],
  }
  constructor(private fb: FormBuilder, private router: Router) {   
   }

  ngOnInit() {
    this.contractRenewal = this.fb.group({
      
      division: ['North West', Validators.required],
      fullAdd: ['', Validators.required],
      region: ['Chicago', Validators.required],
      documentType: ['FA', Validators.required],
      pafSubType: ['Objection Response Letter', Validators.required],
      // currExpirydate: [null, Validators.required],
      // newExpirydate: [null, Validators.required],
    })
    this.loaded = true;
    // this.contractRenewal.addControl('currExpirydate', )
  }
  renew(){
    // this.router.navigate(['contracts-library'])
    this.showAlertBox = true;
  }
  divisionChange(event){
    switch(event.target.value){
      case 'North West':
        this.contractRenewal.get('region').setValue('Chicago');
        break;
      case 'North East':
        this.contractRenewal.get('region').setValue('Boston');
        break;
      case 'East':
        this.contractRenewal.get('region').setValue('Norfolk');
        break;
      default:
        this.contractRenewal.get('region').setValue('Chicago');        
    }
  }
  closeAlert(){
    this.showAlertBox = false;
    this.router.navigate(['contracts-library', {fromRenewal: true}])
  }

  

}