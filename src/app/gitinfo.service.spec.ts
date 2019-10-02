import { TestBed } from '@angular/core/testing';

import { GitinfoService } from './gitinfo.service';

describe('GitinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitinfoService = TestBed.get(GitinfoService);
    expect(service).toBeTruthy();
  });
});
