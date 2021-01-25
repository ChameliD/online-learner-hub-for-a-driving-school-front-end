import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Applicant } from './applicant';
@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  private baseURL = "http://localhost:8080/api/v1/applicants";
  constructor(private httpClient : HttpClient) { }

  gtApplicantList():Observable<Applicant[]>{
    return this.httpClient.get<Applicant[]>(`${this.baseURL}`);
  }
  createApplicant(applicant : Applicant ):Observable<object>{
    return this.httpClient.post(`${this.baseURL}`,applicant);
  }
  getApplicantId(id: number):Observable<Applicant>{
    return this.httpClient.get<Applicant>(`${this.baseURL}/${id}`);
  }

  updateApplicant(id: number,applicant:Applicant):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,applicant);
  }
  deleteApplicant(id: number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
