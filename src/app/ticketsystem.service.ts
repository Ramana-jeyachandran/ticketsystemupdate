import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TicketsystemService {
  _baseUrl;
  constructor(private http:HttpClient) {
    this._baseUrl = 'http://localhost:4200/';
   }
   public register(data):Observable<any>
   {
     console.log(data);
     return this.http.post("http://localhost:8080/freshdesk/account/register",data);
   }
   public login(data):Observable<any>
   {
     console.log(data);
     return this.http.post("http://localhost:8080/freshdesk/account/login",data);
   }
   public getTickets(token):Observable<any>
   {
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization','Bearer '+token);
     return this.http.get("http://localhost:8080/freshdesk/account/users/usertickets",{ headers: headers });
   }
   public addTickets(data,token):Observable<any>
   {
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization','Bearer '+token);
     return this.http.post("http://localhost:8080/freshdesk/account/users/addtickets",data,{ headers: headers });
   }
   public deleteticket(data,token):Observable<any>
   {
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization','Bearer '+token);
     return this.http.delete(`http://localhost:8080/freshdesk/account/users/tickets/remove/`+data,{ headers: headers });
   }
   public getSpecificTicket(token,data):Observable<any>
   {
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization','Bearer '+token);
     return this.http.get("http://localhost:8080/freshdesk/account/users/tickets/"+data,{ headers: headers });
   }
   public update(token,id,data):Observable<any>
   {
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization','Bearer '+token);
     return this.http.put("http://localhost:8080/freshdesk/account/users/tickets/updateticket/"+id,data,{ headers: headers });
   }
   public getContacts(token):Observable<any>
   {
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization','Bearer '+token);
     return this.http.get("http://localhost:8080/freshdesk/account/users/contacts",{ headers: headers });
   }
   public makeAgent(token,id):Observable<any>
   {
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization','Bearer '+token);
     return this.http.put("http://localhost:8080/freshdesk/account/users/createagent/"+id,{ headers: headers });
   }
   public check(token):Observable<any>
   {
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization','Bearer '+token);
     return this.http.get("http://localhost:8080/freshdesk/account/users/check",{ headers: headers });
   }
   public getAgents(token):Observable<any>
   {
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization','Bearer '+token);
     return this.http.get("http://localhost:8080/freshdesk/account/users/agents",{ headers: headers });
   }
   public getAllTickets(token):Observable<any>
   {
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization','Bearer '+token);
     return this.http.get("http://localhost:8080/freshdesk/account/users/tickets",{ headers: headers });
   }
   public AssignTicket(token,id,agentid):Observable<any>
   {
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization','Bearer '+token);
     return this.http.put("http://localhost:8080/freshdesk/account/users/assignticket/"+id+"/"+agentid,{ headers: headers });
   }
   public viewAssignedTickets(token):Observable<any>
   {
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization','Bearer '+token);
     return this.http.get("http://localhost:8080/freshdesk/account/users/viewassignedtickets",{ headers: headers });
   }
   public deleteAgent(data,token):Observable<any>
   {
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization','Bearer '+token);
     return this.http.delete(`http://localhost:8080/freshdesk/account/users/removeagent/`+data,{ headers: headers });
   }
   public ProvideSolution(token,id,data):Observable<any>
   {
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization','Bearer '+token);
     return this.http.put("http://localhost:8080/freshdesk/account/users/providesolution/"+id+"/"+data,{ headers: headers });
   }
   public getUserProfile(token):Observable<any>
   {
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization','Bearer '+token);
     return this.http.get("http://localhost:8080/freshdesk/account/users/user",{ headers: headers });
   }
   public updateUser(token,data):Observable<any>
   {
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization','Bearer '+token);
     return this.http.put("http://localhost:8080/freshdesk/account/users/user/update",data,{ headers: headers });

   }
   public deletecontact(data,token):Observable<any>
   {
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization','Bearer '+token);
     return this.http.delete(`http://localhost:8080/freshdesk/account/users/contacts/remove/`+data,{ headers: headers });
   }
}
