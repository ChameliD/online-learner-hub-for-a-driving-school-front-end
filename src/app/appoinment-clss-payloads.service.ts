import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppoinmentClssPayloads } from './appoinment-clss-payloads';

@Injectable({
  providedIn: 'root'
})
export class AppoinmentClssPayloadsService {

  private baseURL = "http://localhost:8080/api/v1/appoinmentClass";
  constructor(private httpClient : HttpClient) { }

  gtAppoinmentClssList():Observable<AppoinmentClssPayloads[]>{
    return this.httpClient.get<AppoinmentClssPayloads[]>(`http://localhost:8080/api/v1/appoinmentClass/all`);
  }
  createAppoinmentClss(appoinmentClssPayloads : AppoinmentClssPayloads ):Observable<object>{
    return this.httpClient.post(`${this.baseURL}`,appoinmentClssPayloads);
  }
  getAppoinmentclssById(id: number):Observable<AppoinmentClssPayloads>{
    return this.httpClient.get<AppoinmentClssPayloads>(`${this.baseURL}/${id}`);
  }

  updateAppoinmentclss(id: number,appoinmentClssPayloads:AppoinmentClssPayloads):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,appoinmentClssPayloads);
  }
  deleteAppoinmentclss(id: number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
