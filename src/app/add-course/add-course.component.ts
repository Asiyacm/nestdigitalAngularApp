import { Component } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {

  title=""
  description=""
  duration=""
  date=""
  venue=""


  readValue=()=>
 {
  let data:any=
  {"courseTitle":this.title,"courseDescription":this.description, "courseDuration":this.duration,"courseDate":this.date,"courseVenue":this.venue}
console.log(data)

}


}
