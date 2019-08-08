import { TestBed } from '@angular/core/testing';

import { SocietyeventService } from './societyevent.service';

describe('SocietyeventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocietyeventService = TestBed.get(SocietyeventService);
    expect(service).toBeTruthy();
  });
});
