import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
/*import { ApplicantDetailsComponent } from './applicant-details/applicant-details.component';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';
import { AppoinmentsDetailsComponent } from './appoinments-details/appoinments-details.component';
import { AppoinmentsListComponent } from './appoinments-list/appoinments-list.component';
import { CreateApplicantComponent } from './create-applicant/create-applicant.component';
import { CreateAppoinmentsComponent } from './create-appoinments/create-appoinments.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateApplicantComponent } from './update-applicant/update-applicant.component';
import { UpdateAppoinmentsComponent } from './update-appoinments/update-appoinments.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';*/

const routes: Routes = [
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
