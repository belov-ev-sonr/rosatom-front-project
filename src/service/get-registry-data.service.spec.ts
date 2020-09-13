import { TestBed } from '@angular/core/testing';

import { GetRegistryDataService } from './get-registry-data.service';

describe('GetRegistryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetRegistryDataService = TestBed.get(GetRegistryDataService);
    expect(service).toBeTruthy();
  });
});
