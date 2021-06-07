import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { enemiesMock } from '../mocks/mock-enemies';
import { enemyMock } from '../mocks/mock-enemy';

import { EnemyApiService } from './enemy-api.service';

describe('EnemyApiService', () => {
  let service: EnemyApiService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let req: TestRequest;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      //TODO: add a provider for the config service to mock the get method
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

    service = TestBed.inject(EnemyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all enemies', () => {
    let search = "";
    let pageNumber = 0;
    let pageSize = 4;
    service.getAllEnemies(search, pageNumber, pageSize).subscribe((res) => {
      expect(res).toBeTruthy();
      expect(res).toBe(enemiesMock);
    }); 
    //  http://localhost:8081/api/enemies?search=G&pageNumber=0&pageSize=4
    req = httpTestingController.expectOne("");
    req.flush(enemiesMock);
  });

  it('should get an enemy', () => {
    let name = "Nito";
    service.getEnemy(name).subscribe((res) => {
      expect(res).toBeTruthy();
      expect(res).toBe(enemyMock);
    }); 
    //  http://localhost:8081/api/enemies/Bell-Gargoyle
    req = httpTestingController.expectOne("");
    req.flush(enemyMock);
  });
});
