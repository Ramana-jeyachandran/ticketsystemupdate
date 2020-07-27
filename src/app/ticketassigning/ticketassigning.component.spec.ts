import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketassigningComponent } from './ticketassigning.component';

describe('TicketassigningComponent', () => {
  let component: TicketassigningComponent;
  let fixture: ComponentFixture<TicketassigningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketassigningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketassigningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
