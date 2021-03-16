import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css']
})
export class UpdateVehicleComponent implements OnInit {

  id: number;
 vehicle:Vehicle = new Vehicle();
  constructor(private vehicleService: VehicleService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.vehicleService.getVehicleById(this.id).subscribe(data =>{
      this.vehicle = data;
    },error => console.log(error));
  }
  onSubmit()
  {
    this.vehicleService.updateVehicle(this.id,this.vehicle).subscribe(data =>{
      this.goToEmployeeList();

    },error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/vehicles']);
  }



}
