import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { concatMap, map } from 'rxjs/operators';

import { ConfigService } from './config.service';
import { Observable } from 'rxjs';
import { doesNotReject } from 'node:assert';

describe('ConfigService', () => {
  let service: ConfigService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  const CONFIG = environment.config;
  const baseUrl = "http://localhost:8081/";
  const enemyUri = "api/enemies";
  const configMock = {
    api: {
    wsenemy: {
      base: baseUrl,
      uri: {
        enemies: enemyUri
      }
    }
  }}

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

    service = TestBed.inject(ConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the correct configuration', () => {
    let req: TestRequest;

    service.get().subscribe((res) => {
      expect(res).toBe(configMock);
      expect(res.api.wsenemy.base).toEqual(baseUrl);
      expect(res.api.wsenemy.uri.enemies).toEqual(enemyUri);
    });

    req = httpTestingController.expectOne(CONFIG);
    req.flush(configMock);
  });
});
