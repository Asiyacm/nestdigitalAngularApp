import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmployeePortalComponent } from './employee-portal/employee-portal.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { AddFriendsComponent } from './add-friends/add-friends.component';
import { ViewFriendsComponent } from './view-friends/view-friends.component';
import { RouterModule, Routes } from '@angular/router';


const myRoute:Routes=
[
  {
    path:"",
    component: HomeComponent
  },
  {
  path:"gallery",
  component: GalleryComponent
},
{
  path:"contactus",
  component: ContactUsComponent
},

{
  path:"aboutus",
  component: AboutUsComponent
},
{
  path:"adminLogin",
  component: AdminLoginComponent
},
{
  path:"employeeLogin",
  component: EmployeePortalComponent
},
{
  path:"employeeRegistration",
  component: EmployeeRegisterComponent
},
{
  path:"viewCourse",
  component: ViewCourseComponent
},
{
  path:"viewFriends",
  component:ViewFriendsComponent
},

{
  path:"addCourse",
  component:AddCourseComponent
},
{
  path:"addFriends",
  component:AddFriendsComponent
}
]



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    GalleryComponent,
    ContactUsComponent,
    AdminLoginComponent,
    EmployeePortalComponent,
    EmployeeRegisterComponent,
    AddCourseComponent,
    ViewCourseComponent,
    AddFriendsComponent,
    ViewFriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
