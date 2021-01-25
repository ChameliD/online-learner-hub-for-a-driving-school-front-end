import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Applicant } from '../applicant';
import { ApplicantService } from '../applicant.service';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css']
})
export class ApplicantListComponent implements OnInit {

  applicants: Applicant[];
  constructor(private applicantService: ApplicantService,
    private router : Router) { }

  ngOnInit(): void {
    this.getApplicant();
  }
  private getApplicant(){
    this.applicantService.gtApplicantList().subscribe(data =>{
      this.applicants = data; 
    });
  }
  applicantDetails(id : number){
    this.router.navigate(['applicant-details',id]);
  }
  updateApplicant(id : number){
    this.router.navigate(['update-applicant',id]);

  }
  deleteApplicant(id :number){
    this.applicantService.deleteApplicant(id).subscribe(data =>{
      console.log(data);
      this.getApplicant();
    })
  }

}
