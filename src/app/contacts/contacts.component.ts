import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TicketsystemService } from '../ticketsystem.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts = [];
  constructor(private router: Router, private formbuilder: FormBuilder, private ticketservice: TicketsystemService, private modalService: NgbModal) {
    this.ticketservice.getContacts(localStorage.getItem("token")).subscribe(
      (data) => {
        console.log(data);
        this.contacts.push(data);
        console.log(this.contacts);
      }
    );
  }
  make(id: any) {


    this.ticketservice.makeAgent(localStorage.getItem("token"), id).subscribe(
      (data) => {
        console.log(data);

      },
      (error) => {
        if (error.status == 200) {
          alert("Agent created")
        }
        else {
          alert("Agent already exists");
        }
      }

    );

  }
  delete(index: any) {
    this.ticketservice.deletecontact(index, localStorage.getItem("token")).subscribe((data) => {
      console.log(data);

      window.location.reload();
    },
      (error) => {
        if (error.status == 200) {
          this.contacts.splice(index, 1);
          window.location.reload();
        }
        else {
          alert("You Don't have access permission to delete contact");
        }
      })
  }

  ngOnInit(): void {
  }

}
