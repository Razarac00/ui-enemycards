import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from 'src/app/models/config.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private readonly configPath: string;

  constructor(private readonly http: HttpClient) {
    this.configPath = environment.config;
  }

  get(): Observable<Config> {
    return this.http.get<Config>(this.configPath);
  }
}
