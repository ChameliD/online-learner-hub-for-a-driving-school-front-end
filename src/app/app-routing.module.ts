import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicantDetailsComponent } from './applicant-details/applicant-details.component';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';
import { CreateApplicantComponent } from './create-applicant/create-applicant.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateApplicantComponent } from './update-applicant/update-applicant.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';

const routes: Routes = [
  {path: 'employees',component:EmployeeListComponent},
  {path: 'create-employee',component:CreateEmployeeComponent},
  {path: '',redirectTo:'employees',pathMatch:'full'},
  {path: 'update-employee/:id',component:UpdateEmployeeComponent},
  {path: 'employee-details/:id',component:EmployeeDetailsComponent},

  {path: 'applicants',component:ApplicantListComponent},
  {path: 'create-applicant',component:CreateApplicantComponent},
  {path: '',redirectTo:'applicants',pathMatch:'full'},
  {path: 'update-applicant/:id',component:UpdateApplicantComponent},
  {path: 'applicant-details/:id',component:ApplicantDetailsComponent},
  
  {path: 'vehicles',component:VehicleListComponent},
  {path: 'create-vehicle',component:CreateVehicleComponent},
  {path: '',redirectTo:'vehicles',pathMatch:'full'},
  {path: 'update-vehicle/:id',component:UpdateVehicleComponent},
  {path: 'vehicle-details/:id',component:VehicleDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
