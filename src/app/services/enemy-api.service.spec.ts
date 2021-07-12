import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { fakeAsync, TestBed } from '@angular/core/testing';
import { enemiesMock } from '../mocks/mock-enemies';
import { configServiceMock } from '../mocks/mock-configservice';
import { enemyMock } from '../mocks/mock-enemy';
import { ConfigService } from './config/config.service';

import { EnemyApiService } from './enemy-api.service';

describe('EnemyApiService', () => {
  let service: EnemyApiService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let req: TestRequest;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{provide: ConfigService, useValue: configServiceMock}]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

    service = TestBed.inject(EnemyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all enemies', fakeAsync(() => {
    let search = "";
    let pageNumber = 0;
    let pageSize = 4;
    service.getAllEnemies(search, pageNumber, pageSize).subscribe((res) => {
      expect(res).toBeTruthy();
      expect(res).toBe(enemiesMock);
      expect(res.pageSize).toEqual(pageSize);
      expect(res.pageNumber).toEqual(pageNumber);
    }); 
    //  http://localhost:8081/api/enemies?search=G&pageNumber=0&pageSize=4
    req = httpTestingController.expectOne("http://localhost:test/api/enemies?search=&pageNumber=0&pageSize=4");
    req.flush(enemiesMock);
  }));

  it('should get an enemy', fakeAsync(() => {
    let name = "Bell-Gargoyle";
    service.getEnemy(name).subscribe((res) => {
      expect(res).toBeTruthy();
      expect(res).toBe(enemyMock);
      expect(res.name).toEqual(name.replace("-", " "));
    }); 
    //  http://localhost:8081/api/enemies/Bell-Gargoyle
    req = httpTestingController.expectOne("http://localhost:test/api/enemies/Bell-Gargoyle");
    req.flush(enemyMock);
  }));
});
