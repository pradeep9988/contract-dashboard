import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule, Router} from '@angular/router';
import {MainRoutes} from './app.routing';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TypeOfContractComponent } from './type-of-contract/type-of-contract.component';
import { NewContractComponent } from './new-contract/new-contract.component';
import { GenerateContractComponent } from './generate-contract/generate-contract.component';
import { ContractsLibraryComponent } from './contracts-library/contracts-library.component';
import { ContractInsightsComponent } from './contract-insights/contract-insights.component';
import { ApproverDashboardComponent } from './approver-dashboard/approver-dashboard.component';
import { ContractHomeComponent } from './contract-home/contract-home.component';
import { ChartsComponent } from './charts/charts.component';
import { HighchartsChartModule } from "highcharts-angular";
import { ContractRenewalComponent } from './contract-renewal/contract-renewal.component';
import { ContractTerminationComponent } from './contract-termination/contract-termination.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContractRenewalDetailsComponent } from './contract-renewal-details/contract-renewal-details.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(MainRoutes), HighchartsChartModule, BrowserAnimationsModule, BsDatepickerModule ],
  declarations: [ AppComponent, HelloComponent, TypeOfContractComponent, NewContractComponent, GenerateContractComponent, ContractsLibraryComponent, ContractInsightsComponent, ApproverDashboardComponent, ContractHomeComponent, ChartsComponent, ContractRenewalComponent, ContractTerminationComponent, ContractRenewalDetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
