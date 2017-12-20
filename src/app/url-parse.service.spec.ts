import { TestBed, inject } from '@angular/core/testing';

import { UrlParseService } from './url-parse.service';

describe('UrlParseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlParseService]
    });
  });

  it('should be created', inject([UrlParseService], (service: UrlParseService) => {
    expect(service).toBeTruthy();
  }));
});
