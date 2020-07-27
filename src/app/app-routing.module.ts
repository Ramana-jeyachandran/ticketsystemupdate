import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AgentsComponent } from './agents/agents.component';
import { TicketassigningComponent } from './ticketassigning/ticketassigning.component';
import { AgentticketsComponent } from './agenttickets/agenttickets.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import {TicketauthGuard} from './ticketauth.guard';

const routes: Routes = [
  {
    path: "",
    component: AuthenticationComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate:[TicketauthGuard]
  },
  {
    path: "contacts",
    component: ContactsComponent,
    canActivate:[TicketauthGuard]
  },
  {
    path: "agents",
    component: AgentsComponent,
    canActivate:[TicketauthGuard]
  },
  {
    path: "assignticket",
    component: TicketassigningComponent,
    canActivate:[TicketauthGuard]
  },
  {
    path: "agenttickets",
    component:AgentticketsComponent,
    canActivate:[TicketauthGuard]
  },
  {
    path: "userprofile",
    component:UserprofileComponent,
    canActivate:[TicketauthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
