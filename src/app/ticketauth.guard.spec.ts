import { TestBed } from '@angular/core/testing';

import { TicketauthGuard } from './ticketauth.guard';

describe('TicketauthGuard', () => {
  let guard: TicketauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TicketauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
