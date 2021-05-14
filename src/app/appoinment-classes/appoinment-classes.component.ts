import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppoinmentClssPayloads } from '../appoinment-clss-payloads';
import { AppoinmentClssPayloadsService } from '../appoinment-clss-payloads.service';

@Component({
  selector: 'app-appoinment-classes',
  templateUrl: './appoinment-classes.component.html',
  styleUrls: ['./appoinment-classes.component.css']
})
export class AppoinmentClassesComponent implements OnInit {

  
  appoinments:AppoinmentClssPayloads = new AppoinmentClssPayloads
  
  constructor(private appoinmentClassService:AppoinmentClssPayloadsService ,
    private router:Router){}
  
  ngOnInit(): void {
  }

  saveAppoinmentClass(){
    this.appoinmentClassService.createAppoinmentClss(this.appoinments).subscribe(data =>{
      console.log(data);
      this.goToAppoinmentsClssList();

    }),
    error => console.log(error);
    
  }
  goToAppoinmentsClssList(){
    this.router.navigate(['/appoinmentClassList']);
  }

  onCheack(){

  }

  onSubmit(){
    console.log(this.appoinments);
    this.saveAppoinmentClass();

  }


}
