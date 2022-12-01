import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent {

  empid=""
  fname=""
  lname=""
  houseno=""
  sname=""
  pin=""
  district=""
  state=""
  country=""
  mobile=""
  email=""
  pname=""
  gender=""
  hdegree=""
  yexp=""
  djoin=""
  uname=""
  pass=""
  cpass=""


  readValue=()=>
  {
    let data:any=
    {"employeeid":this.empid,"firstname":this.fname,"lastanme":this.lname,"houseno":this.houseno,"street":this.sname,
    "pincode":this.pin,"district":this.district,"state":this.state,"country":this.country,"mobile":this.mobile,"email":this.email,
    "parent":this.pname,"gender":this.gender,"degree":this.hdegree,"yearofexp":this.yexp,"joindate":this.djoin,"username":this.uname,
    "password":this.pass,"cpassword":this.cpass}
  
    console.log(data)

  }



}
