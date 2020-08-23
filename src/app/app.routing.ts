
import { TypeOfContractComponent } from './type-of-contract/type-of-contract.component';
import { NewContractComponent } from './new-contract/new-contract.component';
import { GenerateContractComponent } from './generate-contract/generate-contract.component';
import { ContractsLibraryComponent } from './contracts-library/contracts-library.component';
import { ContractInsightsComponent } from './contract-insights/contract-insights.component';
import { ApproverDashboardComponent } from './approver-dashboard/approver-dashboard.component';
import { ContractHomeComponent } from './contract-home/contract-home.component';
import { ContractRenewalComponent } from './contract-renewal/contract-renewal.component';
import { ContractTerminationComponent } from './contract-termination/contract-termination.component';
import { ContractRenewalDetailsComponent } from './contract-renewal-details/contract-renewal-details.component';

export const MainRoutes = [
        {path:'', component: ContractHomeComponent},
        {path:'new-contract', component: NewContractComponent},
        {path:'generate-contract', component: GenerateContractComponent},
        {path:'contracts-library', component: ContractsLibraryComponent},
        {path:'contract-insights', component: ContractInsightsComponent},
        {path:'approver-dashboard', component: ApproverDashboardComponent},
        {path:'type-of-contract', component: TypeOfContractComponent},
        {path:'contract-renewal', component: ContractRenewalComponent},
        {path:'contract-termination', component: ContractTerminationComponent},
        {path:'contract-renewal-details', component: ContractRenewalDetailsComponent}
        // { path: '', redirectTo: 'Home', pathMatch: 'full' }
    ]
