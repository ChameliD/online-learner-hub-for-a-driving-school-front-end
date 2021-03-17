import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appoinments } from '../appoinments';
import { AppoinmentsService } from '../appoinments.service';

@Component({
  selector: 'app-create-appoinments',
  templateUrl: './create-appoinments.component.html',
  styleUrls: ['./create-appoinments.component.css']
})
export class CreateAppoinmentsComponent implements OnInit {

  
  appoinments:Appoinments = new Appoinments
  constructor(private appoinmentService:AppoinmentsService ,
    private router:Router){}
  
  ngOnInit(): void {
  }
  saveAppoinments(){
    this.appoinmentService.createAppoinment(this.appoinments).subscribe(data =>{
      console.log(data);
      this.goToAppoinmentsList();

    }),
    error => console.log(error);
    
  }
  goToAppoinmentsList(){
    this.router.navigate(['/appoinments']);
  }

  onSubmit(){
    console.log(this.appoinments);
    this.saveAppoinments();

  }

}
