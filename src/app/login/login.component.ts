import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TicketsystemService } from '../ticketsystem.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myform
  constructor(private fb: FormBuilder, private ticketservice: TicketsystemService,private router:Router) {
    this.myform = this.fb.group({
      "username": this.fb.control('', [Validators.required]),
      "password": this.fb.control('', [Validators.required, Validators.min(4), Validators.max(10)]),
       })
      }
      validate()
      {
       if(this.myform.valid)
       {
         this.ticketservice.login(this.myform.value).subscribe((data)=>{
           console.log(data.token);
           localStorage.setItem("token",data.token);
           this.router.navigateByUrl("dashboard");
         },
         (error)=>{
           console.log(error);
           alert("Username and Password doesn't match")

         })

       }
      }
  ngOnInit(): void {
  }

}
