import { Component, OnInit } from '@angular/core';
import { TicketsystemService } from '../ticketsystem.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tickets = [];
  closeResult = '';
  myform;
  myform1;
  constructor(private router:Router,private formbuilder: FormBuilder, private ticketservice: TicketsystemService, private modalService: NgbModal) {
    this.ticketservice.getTickets(localStorage.getItem("token")).subscribe(
      (data) => {
        console.log(data);
        this.tickets.push(data);
        console.log(this.tickets);
      },
      (error)=>{
        alert("You Have Not created any tickets");
      }
    );
    this.myform = this.formbuilder.group({
      "requesterid": this.formbuilder.control('', [Validators.required]),
      "requestername": this.formbuilder.control('', [Validators.required]),
      "email": this.formbuilder.control('', [Validators.required, Validators.email]),
      "phonenumber": this.formbuilder.control('', [Validators.required]),
      "priority": this.formbuilder.control(''),
      "ccmails": this.formbuilder.control('', [Validators.required]),
      "subject": this.formbuilder.control('', [Validators.required]),

      "type": this.formbuilder.control('', [Validators.required]),

    })
  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      if (this.myform.valid) {
        console.log(this.myform.value);
        this.ticketservice.addTickets(this.myform.value, localStorage.getItem("token")).subscribe((data) => {
          this.tickets.push(data);
          window.location.reload()

        }, (error) => { })
      }
      else {
        console.log("Error");
      }

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log(this.closeResult);
    });
  }
  open1(content1, id) {
    console.log(id);
    this.ticketservice.getSpecificTicket(localStorage.getItem("token"), id).subscribe((data) => {
      this.myform1=data;
      console.log(this.myform1);
      this.myform = this.formbuilder.group({
        "requesterid": this.formbuilder.control(data.requesterid, [Validators.required]),
        "requestername": this.formbuilder.control(data.requestername, [Validators.required]),
        "email": this.formbuilder.control(data.email, [Validators.required, Validators.email]),
        "phonenumber": this.formbuilder.control(data.phonenumber, [Validators.required]),
        //"priority": this.formbuilder.control(data.requestername, [Validators.required]),
        "ccmails": this.formbuilder.control(data.ccmails, [Validators.required]),
        "subject": this.formbuilder.control(data.subject, [Validators.required]),
  
        "type": this.formbuilder.control(data.type, [Validators.required]),
  
      })  
    
      console.log(this.myform.value);
      //this.myform1.push(this.myform.value);
    });
    this.modalService.open(content1, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
     
      this.myform.value.id=this.myform1.id;
      this.myform.value.username=this.myform1.username;
      this.myform.value.solution=this.myform1.solution;
      this.myform.value.priority=this.myform1.priority;
      this.myform.value.resppondername=this.myform1.resppondername;
      this.myform.value.status=this.myform1.status;
       console.log(this.myform.value);
     
      this.ticketservice.update(localStorage.getItem("token"),id,this.myform.value).subscribe((data)=>{
        console.log("updated");
        window.location.reload();
      },
      (error)=>{
        if(error.status==200)
        {
          window.location.reload();
        }
        else{
          alert("error in updation");
        }
      }
      )


    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log(this.closeResult);
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  delete(index: any) {
    this.ticketservice.deleteticket(index, localStorage.getItem("token")).subscribe((data) => {
      console.log(data);
      this.tickets.splice(index, 1);
      window.location.reload();
    })
  }
  logout()
  {
    localStorage.removeItem("token");
    this.router.navigateByUrl("");
  }

  ngOnInit(): void {
  }

}
