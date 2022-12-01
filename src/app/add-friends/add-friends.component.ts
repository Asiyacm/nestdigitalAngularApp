import { Component } from '@angular/core';

@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.css']
})
export class AddFriendsComponent {

  name=""
  friendname=""
  describe=""
  nickname=""



  readValue=()=>
  {
    let data:any=
    {"name":this.name,"friendName":this.friendname,"friendNickName":this.nickname,"DescribeYourFriend":this.describe}
  
    console.log(data)

  }

}
