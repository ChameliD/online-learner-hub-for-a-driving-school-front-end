import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicles: Vehicle[];
  constructor(private vehicleService: VehicleService,
    private router : Router) { }

  ngOnInit(): void {
    this.getVehicles();
  }
  private getVehicles(){
    this.vehicleService.gtVehicleList().subscribe(data =>{
      this.vehicles = data; 
    });
  }
  vehicleDetails(id : number){
    this.router.navigate(['vehicle-details',id]);
  }
  updateVehicle(id : number){
    this.router.navigate(['update-vehicle',id]);

  }
  deleteVehicle(id :number){
    this.vehicleService.deleteVehicle(id).subscribe(data =>{
      console.log(data);
      this.getVehicles();
    })
  }

}
