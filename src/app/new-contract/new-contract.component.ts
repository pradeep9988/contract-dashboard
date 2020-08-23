import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-contract',
  templateUrl: './new-contract.component.html',
  styleUrls: ['./new-contract.component.css']
})
export class NewContractComponent implements OnInit {

  newContract: FormGroup = null;
  notSelectedFA: boolean = false;
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
    incorporationNorthWest: [
      {value:'Illinois', name: 'Illinois'},
      {value:'Missouri', name: 'Missouri'},
      {value:'Kansas', name: 'Kansas'}
    ],
    incorporationNorthEast: [
      {value:'Massachusetts', name: 'Massachusetts'},
      {value:'Rhode Island', name: 'Rhode Island'},
      {value:'Connecticut', name: 'Connecticut'}
    ],
    incorporationEast: [
      {value:'Virginia', name: 'Virginia'},
      {value:'Mary Land', name: 'Mary Land'},
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
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.newContract = this.fb.group({
      date: [null, Validators.required],
      division: ['North West', Validators.required],
      ownership: ['Corporation', Validators.required],
      managingOwner: ['', Validators.required],
      incorporation: ['Illinois', Validators.required],
      fullAdd: ['', Validators.required],
      termDate: [{value:'3', disabled: false}, Validators.required],
      agreedFee: [{value:'', disabled: false}, Validators.required],
      royaltyRate: [{value:'', disabled: false}, Validators.required],
      region: ['Chicago', Validators.required],
      documentType: ['FA', Validators.required],
      pafSubType: ['Objection Response Letter', Validators.required],
      incrementPer: ['', Validators.required],
    })
  }

  preview(){
    sessionStorage.setItem('formValue', JSON.stringify(this.newContract.value));
    this.router.navigate(['generate-contract'])
  }
  divisionChange(event){
    switch(event.target.value){
      case 'North West':
        this.newContract.get('region').setValue('Chicago');
        this.newContract.get('incorporation').setValue('Illinois');
        break;
      case 'North East':
        this.newContract.get('region').setValue('Boston');
        this.newContract.get('incorporation').setValue('Massachusetts');
        break;
      case 'East':
        this.newContract.get('region').setValue('Norfolk');
        this.newContract.get('incorporation').setValue('Virginia');
        break;
      default:
        this.newContract.get('region').setValue('Chicago');
        this.newContract.get('incorporation').setValue('Illinois');        
    }
  }
  documentTypeSelected(event){
      if(event.target.value !== 'FA'){
        this.newContract.get('termDate').disable();
        this.newContract.get('agreedFee').disable();
        this.newContract.get('royaltyRate').disable();
        this.newContract.get('incrementPer').disable();
        this.newContract.get('termDate').setValidators(null);
        this.newContract.get('agreedFee').setValidators(null);
        this.newContract.get('royaltyRate').setValidators(null);
        this.newContract.get('incrementPer').setValidators(null);
        this.newContract.get('termDate').updateValueAndValidity();
        this.newContract.get('agreedFee').updateValueAndValidity();
        this.newContract.get('royaltyRate').updateValueAndValidity();
        this.newContract.get('incrementPer').updateValueAndValidity();
      }else{
        this.newContract.get('termDate').enable();
        this.newContract.get('agreedFee').enable();
        this.newContract.get('royaltyRate').enable();
        this.newContract.get('incrementPer').enable();
        this.newContract.get('termDate').setValidators([Validators.required]);
        this.newContract.get('agreedFee').setValidators([Validators.required]);
        this.newContract.get('royaltyRate').setValidators([Validators.required]);
        this.newContract.get('incrementPer').setValidators([Validators.required]);
        this.newContract.get('termDate').updateValueAndValidity();
        this.newContract.get('agreedFee').updateValueAndValidity();
        this.newContract.get('royaltyRate').updateValueAndValidity();
        this.newContract.get('incrementPer').updateValueAndValidity();
      }
  }
  incrementChange(event){
    if(event.target.value !== undefined){
      let val = event.target.value.replace(/\D/g, '');
      this.newContract.get('incrementPer').setValue(val);
    }
  }
  royaltyChange(event){
    if(event.target.value !== undefined){
      let val = event.target.value.replace(/\D/g, '');
      this.newContract.get('royaltyRate').setValue(val);
    }
  }
}