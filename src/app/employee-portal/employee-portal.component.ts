import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-portal',
  templateUrl: './employee-portal.component.html',
  styleUrls: ['./employee-portal.component.css']
})
export class EmployeePortalComponent {

  empid=""
  password=""


  
  readValue=()=>
  {
    let data:any=
    {"username":this.empid,"password":this.password}
  
    console.log(data)

  }

}
