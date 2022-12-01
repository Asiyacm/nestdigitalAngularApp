import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-portal',
  templateUrl: './employee-portal.component.html',
  styleUrls: ['./employee-portal.component.css']
})
export class EmployeePortalComponent {

  empid=""
  password=""

  constructor(private route:Router){}
  
  readValue=()=>
  {
    let data:any=
    {"username":this.empid,"password":this.password}
  
    console.log(data)

    if (this.empid=="1122"&&this.password=="12345") {
      
      this.route.navigate(['/addCourse'])
     } else {
         alert("Invalid EmployeeId and Password")
      
     }

  }

}
