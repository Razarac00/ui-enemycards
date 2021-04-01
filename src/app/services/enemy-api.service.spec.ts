import { TestBed } from '@angular/core/testing';

import { EnemyApiService } from './enemy-api.service';

describe('EnemyApiService', () => {
  let service: EnemyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnemyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
