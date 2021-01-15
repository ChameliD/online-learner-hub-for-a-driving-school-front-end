import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  constructor() { }

  ngOnInit(): void {
    this.employees=[{
      "id":1,
      "firstName":"Chameli",
      "lastName":"Menike",
      "emailId":"chameli@mail.com"
    },
    {
      "id":2,
      "firstName":"Minidu",
      "lastName":"Sampath",
      "emailId":"samsam@mail.com"
    }]
  }

}
