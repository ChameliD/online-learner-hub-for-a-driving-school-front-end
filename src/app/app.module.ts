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
//import { AddPostComponent } from './add-post/add-post.component';
import { HttpClientInterceptor } from './http-client-interceptor';
//import { PostComponent } from './post/post.component';
//import { TestComponent } from './test/test.component';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz/quiz.component';
import { CreateAppoinmentsComponent } from './create-appoinments/create-appoinments.component';
import { AppoinmentsListComponent } from './appoinments-list/appoinments-list.component';
import { UpdateAppoinmentsComponent } from './update-appoinments/update-appoinments.component';
import { AppoinmentsDetailsComponent } from './appoinments-details/appoinments-details.component';
import { AuthGuard } from './auth.guard';
import { OurServiceComponent } from './our-service/our-service.component';
import { FaqsComponent } from './faqs/faqs.component';
import { QAFormComponent } from './q-a-form/q-a-form.component';
import { AppoinmentHomeComponent } from './appoinment-home/appoinment-home.component';
import { AppoinmentDrivingComponent } from './appoinment-driving/appoinment-driving.component';
import { AppoinmentClassListComponent } from './appoinment-class-list/appoinment-class-list.component';
import { CreateAppoinmentsClassesComponent } from './create-appoinments-classes/create-appoinments-classes.component';
import { AppoinmentErrorsComponent } from './appoinment-errors/appoinment-errors.component';
import { LoginErrorComponent } from './login-error/login-error.component';

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
    QuizComponent,
    CreateAppoinmentsComponent,
    AppoinmentsListComponent,
    UpdateAppoinmentsComponent,
    AppoinmentsDetailsComponent,
    OurServiceComponent,
    FaqsComponent,
    QAFormComponent,
    AppoinmentHomeComponent,
    AppoinmentDrivingComponent,
    AppoinmentClassListComponent,
    CreateAppoinmentsClassesComponent,
    AppoinmentErrorsComponent,
    LoginErrorComponent,
   
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2Webstorage.forRoot(),
    RouterModule.forRoot([

      {path: 'home', component: HomeComponent},
      {path: '', component: RegisterComponent},
      {path: 'register', component: RegisterComponent},
     // {path: 'post/:id', component: PostComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register-success', component: RegisterSuccessComponent},
      {path:'login-error',component:LoginErrorComponent},
      {path: 'home', component: HomeComponent},
      {path: 'our-service', component: OurServiceComponent},
      {path: 'faqs', component: FaqsComponent},
     
     {path: 'employees',component:EmployeeListComponent},
      {path: 'create-employee',component:CreateEmployeeComponent,canActivate:[AuthGuard]},
      {path: '',redirectTo:'employees',pathMatch:'full'},
      {path: 'update-employee/:id',component:UpdateEmployeeComponent,canActivate:[AuthGuard]},
      {path: 'employee-details/:id',component:EmployeeDetailsComponent,canActivate:[AuthGuard]},

      {path: 'applicants',component:ApplicantListComponent,canActivate:[AuthGuard]},
      {path: 'create-applicant',component:CreateApplicantComponent,canActivate:[AuthGuard]},
      {path: '',redirectTo:'applicants',pathMatch:'full'},
      {path: 'update-applicant/:id',component:UpdateApplicantComponent,canActivate:[AuthGuard]},
      {path: 'applicant-details/:id',component:ApplicantDetailsComponent,canActivate:[AuthGuard]},
      
      {path: 'vehicles',component:VehicleListComponent,canActivate:[AuthGuard]},
      {path: 'create-vehicle',component:CreateVehicleComponent,canActivate:[AuthGuard]},
      {path: '',redirectTo:'vehicles',pathMatch:'full'},
      {path: 'update-vehicle/:id',component:UpdateVehicleComponent,canActivate:[AuthGuard]},
      {path: 'vehicle-details/:id',component:VehicleDetailsComponent,canActivate:[AuthGuard]},

      {path: 'appoinmentClass',component:AppoinmentClassListComponent,canActivate:[AuthGuard]},
      {path:'create-appoinments-classes',component:CreateAppoinmentsClassesComponent,canActivate:[AuthGuard]},
      {path: '',redirectTo:'appoinmentClass',pathMatch:'full'},
      
      {path: 'appoinments',component:AppoinmentsListComponent,canActivate:[AuthGuard]},
      {path: 'create-appoinments',component:CreateAppoinmentsComponent,canActivate:[AuthGuard]},
      {path: '',redirectTo:'appoinments',pathMatch:'full'},
      
      {path: 'update-appoinments/:id',component:UpdateAppoinmentsComponent,canActivate:[AuthGuard]},
      {path: 'appoinments-datails/:id',component:AppoinmentsDetailsComponent,canActivate:[AuthGuard]},

      {path: 'appoinment-home',component:AppoinmentHomeComponent,canActivate:[AuthGuard]},
      {path: 'appoinment-errors',component:AppoinmentErrorsComponent,canActivate:[AuthGuard]},
      
      {path:'quiz',component:QuizComponent,canActivate:[AuthGuard]},

      {path:'q-a-form',component:QAFormComponent,canActivate:[AuthGuard]}
      
      
    ]),
    HttpClientModule,
    CommonModule
    

  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true},AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
