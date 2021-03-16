import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component'; 
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule} from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateApplicantComponent } from './create-applicant/create-applicant.component';
import { ApplicantDetailsComponent } from './applicant-details/applicant-details.component';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';
import { UpdateApplicantComponent } from './update-applicant/update-applicant.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterSuccessComponent } from './auth/register-success/register-success.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ng2Webstorage } from 'ngx-webstorage';
import { HomeComponent } from './home/home.component';
import { AddPostComponent } from './add-post/add-post.component';
import { HttpClientInterceptor } from './http-client-interceptor';
//import { PostComponent } from './post/post.component';
import { TestComponent } from './test/test.component';
import { CommonModule } from '@angular/common';

//import {EditorModule} from '@tinymce/tinymce-angular';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    CreateApplicantComponent,
    ApplicantDetailsComponent,
    ApplicantListComponent,
    UpdateApplicantComponent,
    CreateVehicleComponent,
    VehicleDetailsComponent,
    VehicleListComponent,
    UpdateVehicleComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    RegisterSuccessComponent,
    AddPostComponent,
   // PostComponent,
    TestComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2Webstorage.forRoot(),
    RouterModule.forRoot([
      {path: '', component: RegisterComponent},
      {path: 'register', component: RegisterComponent},
     // {path: 'post/:id', component: PostComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register-success', component: RegisterSuccessComponent},
      {path: 'home', component: HomeComponent},
      {path: 'add-post', component: AddPostComponent},
      {path: 'employees',component:EmployeeListComponent},
      {path: 'create-employee',component:CreateEmployeeComponent},
      {path: '',redirectTo:'employees',pathMatch:'full'},
      {path: 'update-employee/:id',component:UpdateEmployeeComponent},
      {path: 'employee-details/:id',component:EmployeeDetailsComponent},
      {path:'test',component:TestComponent}

     
    ]),
    HttpClientModule,
    CommonModule
    

  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
