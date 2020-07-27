import { Component } from '@angular/core';
import { TicketsystemService } from './ticketsystem.service';
//import { TicketsystemService } from './ticketsystem.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ticketsystem';

  constructor(private ticketservice:TicketsystemService,private router:Router)
  {

  }
  checkRole()
  {
     this.ticketservice.check(localStorage.getItem("token")).subscribe((data)=>{
          console.log(data.status);
     },
     (error)=>{
       if(error.status==200)
       {
         //alert("Admin Successfully logged in");
         this.router.navigateByUrl("agents");
       }
       else{
         alert("Access Denied");
       }
     })
  }
  logout()
  {
    localStorage.removeItem("token");
    this.router.navigateByUrl("");
  }
  checkAssigningRole()
  {
     this.ticketservice.check(localStorage.getItem("token")).subscribe((data)=>{
          console.log(data.status);
     },
     (error)=>{
       if(error.status==200)
       {
         //alert("Admin Successfully logged in");
         this.router.navigateByUrl("assignticket");
       }
       else{
         alert("Access Denied");
       }
     })
  }
}
