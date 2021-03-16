import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Applicant } from '../applicant';
import { ApplicantService } from '../applicant.service';

@Component({
  selector: 'app-update-applicant',
  templateUrl: './update-applicant.component.html',
  styleUrls: ['./update-applicant.component.css']
})
export class UpdateApplicantComponent implements OnInit {

  id: number;
  applicant:Applicant = new Applicant();
  constructor(private applicantServics:ApplicantService,
    private route:ActivatedRoute,
    private router:Router){}
 
    
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.applicantServics.getApplicantId(this.id).subscribe(data =>{
      this.applicant = data;
    },error => console.log(error));
  }
  onSubmit()
  {
    this.applicantServics.updateApplicant(this.id,this.applicant).subscribe(data =>{
      this.goToApplicantList();

    },error => console.log(error));
  }

  goToApplicantList(){
    this.router.navigate(['/applicants']);
  }


}
