import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppoinmentClssPayloads } from '../appoinment-clss-payloads';
import { AppoinmentClssPayloadsService } from '../appoinment-clss-payloads.service';

@Component({
  selector: 'app-create-appoinments-classes',
  templateUrl: './create-appoinments-classes.component.html',
  styleUrls: ['./create-appoinments-classes.component.css']
})
export class CreateAppoinmentsClassesComponent implements OnInit {

  appoinmentClass:AppoinmentClssPayloads = new AppoinmentClssPayloads
  allAppoinments:AppoinmentClssPayloads[];
  date;

  constructor(private appoinmentClssPayloadsService:AppoinmentClssPayloadsService ,
    private router:Router){}
  
  ngOnInit(): void {
    this.getAllApoinments();
    
  }

  private getAllApoinments(){
    
      this.appoinmentClssPayloadsService.gtAppoinmentClssList().subscribe(data =>{
        this.allAppoinments=data;
        for(let app in this.allAppoinments){
          console.log(data[app].appoinmentDate)
        }
        
        
      })
    
  }

  saveAppoinments(){
    this.appoinmentClssPayloadsService.createAppoinmentClss(this.appoinmentClass).subscribe(data =>{
      console.log(data);
      this.goToAppoinmentsList();

    }),
    error => console.log(error);
    
  }
  goToAppoinmentsList(){
    this.router.navigate(['/appoinmentClass']);
  }

  onSubmit(){
    
    console.log(this.appoinmentClass);
    this.saveAppoinments();
    

  }

}
