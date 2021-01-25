import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Applicant } from '../applicant';
import { ApplicantService } from '../applicant.service';
@Component({
  selector: 'app-create-applicant',
  templateUrl: './create-applicant.component.html',
  styleUrls: ['./create-applicant.component.css']
})
export class CreateApplicantComponent implements OnInit {

  applicant:Applicant =new Applicant();
  constructor(private applicantService : ApplicantService,
    private router : Router) { }

  ngOnInit(): void {
  }
  saveApplicant(){
    this.applicantService.createApplicant(this.applicant).subscribe(data =>{
      console.log(data);
      this.goToApplicantList();
      
    }),
    error => console.log(error);
    
  }
  goToApplicantList(){
    this.router.navigate(['/applicants']);
  }

  onSubmit(){
    console.log(this.applicant);
    this.saveApplicant();

  }

}
