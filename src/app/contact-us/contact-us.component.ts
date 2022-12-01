import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

name=""
Cname=""
designation=""
phone=""
email=""
country=""
subject=""


readValue=()=>
 {
  let data:any=
  {"name":this.name,"company name":this.Cname, "designation":this.designation,"phone":this.phone,
  "email":this.email,"country":this.country,"subject":this.subject}
console.log(data)

}


}
