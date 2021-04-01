import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from './config/config.service';
import { concatMap, map } from 'rxjs/operators';
import { PageModel } from '../models/PageModel';
import { Enemy } from '../models/Enemy';

@Injectable({
  providedIn: 'root'
})
export class EnemyApiService {

  private readonly wsEnemyURL$: Observable<string>;

  constructor(private readonly http: HttpClient, config: ConfigService) { 
    const config$ = config.get();
    this.wsEnemyURL$ = config$.pipe(
      map((cfg: any) => `${cfg.api.wsenemy.base}${cfg.api.wsenemy.uri.enemies}`)
    );
  }
  /*
  http://localhost:8081/api/enemies?search=G&pageNumber=0&pageSize=4
  http://localhost:8081/api/enemies/Bell-Gargoyle
  */

  getAllEnemies(search: string, pageNumber: number, pageSize: number): Observable<PageModel> {
    const params = new HttpParams().set('search', `${search}`).set('pageNumber', `${pageNumber}`).set('pageSize', `${pageSize}`);

    return this.wsEnemyURL$.pipe(
      concatMap((url) => this.http.get<PageModel>(url, { params }))
    );
  }

  // getEnemy(name: string): Observable<Enemy> {
  //   name = name.trim(); 
  //   return this.wsEnemyURL$.pipe(
  //     map((url) => this.http.get<Enemy>(url))
  //   );
  // }
}
