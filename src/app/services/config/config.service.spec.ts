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
  const configMock = {
    api: {
    wsenemy: {
      base: "http://localhost:8081/",
      uri: {
        enemies: "api/enemies"
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

  it('should get the correct path', () => {
    let req: TestRequest;

    service.get().subscribe((res) => {
      expect(res).toBe(configMock);
    });
    

    req = httpTestingController.expectOne(CONFIG);
    req.flush(configMock);
  });
});
