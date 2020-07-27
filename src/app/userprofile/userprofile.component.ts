import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TicketsystemService } from '../ticketsystem.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  myform1;
  userdata;
  constructor(private formbuilder: FormBuilder, private ticketservice: TicketsystemService) {
     this.ticketservice.getUserProfile(localStorage.getItem("token")).subscribe((data)=>{
       this.userdata=data;
       this.userdata.roles=["ROLE_ADMIN"];
       console.log(this.userdata);
       console.log(this.userdata.email);
       this.myform1 = this.formbuilder.group({
         "id":data.id,
         "roles":[data.roles],
        "username": this.formbuilder.control(data.username, [Validators.required]),
        "email": this.formbuilder.control(data.email, [Validators.required, Validators.email]),
        "password": this.formbuilder.control('', [Validators.required, Validators.min(5), Validators.max(10)]),
        
   })
     },)
    
    
  }
  editAccount()
  {
    this.ticketservice.updateUser(localStorage.getItem("token"),this.myform1.value).subscribe((data)=>{},(error)=>{
      alert("Profile Edited");
      console.log(error.status);
    })
  }
  ngOnInit(): void {
  }

}
