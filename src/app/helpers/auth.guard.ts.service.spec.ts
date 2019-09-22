import { TestBed } from '@angular/core/testing';

import { Auth.Guard.TsService } from './auth.guard.ts.service';

describe('Auth.Guard.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Auth.Guard.TsService = TestBed.get(Auth.Guard.TsService);
    expect(service).toBeTruthy();
  });
});
