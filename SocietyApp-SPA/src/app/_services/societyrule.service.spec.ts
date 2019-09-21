import { TestBed } from '@angular/core/testing';

import { SocietyruleService } from './societyrule.service';

describe('SocietyruleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocietyruleService = TestBed.get(SocietyruleService);
    expect(service).toBeTruthy();
  });
});
