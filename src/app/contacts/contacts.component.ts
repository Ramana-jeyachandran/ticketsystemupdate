import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TicketsystemService } from '../ticketsystem.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts=[];
  constructor(private formbuilder: FormBuilder, private ticketservice: TicketsystemService, private modalService: NgbModal) {
    this.ticketservice.getContacts(localStorage.getItem("token")).subscribe(
      (data) => {
        console.log(data);
        this.contacts.push(data);
        console.log(this.contacts);
      }
    );
  }
  make(id:any)
  {
    this.ticketservice.makeAgent(localStorage.getItem("token"),id).subscribe(
      (data) => {
        console.log(data);
       
      }
    );

  }

  ngOnInit(): void {
  }

}
