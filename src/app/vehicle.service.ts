import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private baseURL = "http://localhost:8080/api/v1/vehicles";
  constructor(private httpClient : HttpClient) { }

  gtVehicleList():Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(`${this.baseURL}`);
  }
  createVehicle(vehicle : Vehicle ):Observable<object>{
    return this.httpClient.post(`${this.baseURL}`,vehicle);
  }
  getVehicleById(id: number):Observable<Vehicle>{
    return this.httpClient.get<Vehicle>(`${this.baseURL}/${id}`);
  }

  updateVehicle(id: number,vehicle:Vehicle):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,vehicle);
  }
  deleteVehicle(id: number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
