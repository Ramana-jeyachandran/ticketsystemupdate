import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TicketsystemService } from '../ticketsystem.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {
  agents=[];
  constructor(private formbuilder: FormBuilder, private ticketservice: TicketsystemService) {
    this.ticketservice.getAgents(localStorage.getItem("token")).subscribe(
      (data) => {
        console.log(data);
        this.agents.push(data);
        console.log(this.agents);
      }
    );
  }
  delete(index: any) {
    this.ticketservice.deleteAgent(index, localStorage.getItem("token")).subscribe((data) => {
      console.log(data);
      
      window.location.reload();
    }),
    (error)=>{
      if(error.status==200)
      {
        this.agents.splice(index, 1);
        window.location.reload();
      }
      else{
        alert("Problem in deleting agent");
      }

    }
  }

  ngOnInit(): void {
  }

}
