import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appoinments } from './appoinments';

@Injectable({
  providedIn: 'root'
})
export class AppoinmentsService {

  private baseURL = "http://localhost:8080/api/v1/appoinments";
  constructor(private httpClient : HttpClient) { }

  gtAppoinmentsList():Observable<Appoinments[]>{
    return this.httpClient.get<Appoinments[]>(`${this.baseURL}`);
  }
  createAppoinment(appoinments : Appoinments ):Observable<object>{
    return this.httpClient.post(`${this.baseURL}`,appoinments);
  }
  getAppoinmentsById(id: number):Observable<Appoinments>{
    return this.httpClient.get<Appoinments>(`${this.baseURL}/${id}`);
  }

  updateAppoinments(id: number,appoinments:Appoinments):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,appoinments);
  }
  deleteAppoinments(id: number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
