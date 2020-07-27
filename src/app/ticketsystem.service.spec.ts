import { TestBed } from '@angular/core/testing';

import { TicketsystemService } from './ticketsystem.service';

describe('TicketsystemService', () => {
  let service: TicketsystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketsystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
