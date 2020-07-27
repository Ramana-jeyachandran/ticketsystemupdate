import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TicketsystemService } from '../ticketsystem.service';

@Component({
  selector: 'app-ticketassigning',
  templateUrl: './ticketassigning.component.html',
  styleUrls: ['./ticketassigning.component.css']
})
export class TicketassigningComponent implements OnInit {
  tickets=[];
  agents;
  agentForm;
  constructor(private formbuilder: FormBuilder, private ticketservice: TicketsystemService) {
    this.ticketservice.getAgents(localStorage.getItem("token")).subscribe(
      (data) => {
        console.log(data);
        this.agents=data;
        console.log(this.agents);
      }
    );
    this.ticketservice.getAllTickets(localStorage.getItem("token")).subscribe(
      (data) => {
        console.log(data);
        this.tickets.push(data);
        console.log(this.tickets);
      }
    );
    this.agentForm = this.formbuilder.group({
      countryControl: this.formbuilder.control(''),
    });
  }
  AssignTicket(ticketid)
  {
    console.log(this.agentForm.get('countryControl').value);
    console.log(ticketid);
    this.ticketservice.AssignTicket(localStorage.getItem("token"),ticketid,this.agentForm.get('countryControl').value).subscribe(
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
