import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TicketsystemService } from '../ticketsystem.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-agenttickets',
  templateUrl: './agenttickets.component.html',
  styleUrls: ['./agenttickets.component.css']
})
export class AgentticketsComponent implements OnInit {
  tickets = [];
  closeResult;
  myform;
  solution;
  constructor(private formbuilder: FormBuilder, private ticketservice: TicketsystemService, private modalService: NgbModal) {
    this.ticketservice.viewAssignedTickets(localStorage.getItem("token")).subscribe(
      (data) => {
        console.log(data);
        this.tickets.push(data);
        console.log(this.tickets);
      },
      (error) => {
        alert("You Have Not created any tickets");
      }
    );
    this.myform = this.formbuilder.group({
      
     'solution':this.formbuilder.control('',Validators.required),

    })
  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
     this.solution=this.myform.get('solution').value;
     console.log(this.solution);

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
  provideSolution(ticketid)
  {
   // console.log(this.m.get('countryControl').value);
    console.log(ticketid);
    this.ticketservice.ProvideSolution(localStorage.getItem("token"),ticketid,this.solution).subscribe(
      (data)=>{

      },
      (error)=>{
        if(error.status==200)
        {
         window.location.reload();
        }
        else{
          alert("Cannot Assign");
        }
      }
    )
  }

  ngOnInit(): void {
  }

}
