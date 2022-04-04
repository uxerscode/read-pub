import { TestBed } from '@angular/core/testing';

import { GetPubSettingsService } from './get-pub-settings.service';

describe('GetPubSettingsService', () => {
  let service: GetPubSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPubSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
