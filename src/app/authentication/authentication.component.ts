import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TicketsystemService } from '../ticketsystem.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  myform;
  constructor(private fb: FormBuilder, private ticketservice: TicketsystemService,private router:Router) {
    this.myform = this.fb.group({
      "username": this.fb.control('', [Validators.required]),
      "email": this.fb.control('', [Validators.required, Validators.email]),
      "password": this.fb.control('', [Validators.required, Validators.min(5), Validators.max(10)]),
      "confirmpassword": this.fb.control('', [Validators.required, Validators.min(5), Validators.max(10)]),
  
      "roles":this.fb.array([this.fb.control('ROLE_USER', [Validators.required])]),
    })
  }
  check() {
    if (this.myform.valid) {
     
      
      console.log(this.myform.value);
      this.ticketservice.register(this.myform.value).subscribe(
        (data) => {
          console.log(data);
          this.router.navigateByUrl("login");
          //window.location.reload()
        },
        (error)=>{
          if(error.status==422)
          {
            alert("Username exists choose another name");
          }
          else{
            alert("Problem in Registration");
          }
        }
      );
    }
    else {
      console.log(this.myform.value);
      window.location.reload()
    }
  }
  replace()
  {
    this.router.navigateByUrl("login");
  }

  ngOnInit(): void {
  }

}
