import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Applicant } from '../applicant';
import { ApplicantService } from '../applicant.service';

@Component({
  selector: 'app-applicant-details',
  templateUrl: './applicant-details.component.html',
  styleUrls: ['./applicant-details.component.css']
})
export class ApplicantDetailsComponent implements OnInit {

  id: number;
  applicant: Applicant;
  constructor(private route : ActivatedRoute,
    private applicantService: ApplicantService) {

     }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.applicant = new Applicant();
    this.applicantService.getApplicantId(this.id).subscribe(data =>{
      this.applicant=data;
    })

  }

}
