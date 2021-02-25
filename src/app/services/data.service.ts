import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private URL = 'http://localhost:3000/api/';

  constructor(private http:HttpClient) { }

  calculate(body) {
    return this.http.get<any>(`${this.URL}calculate/?idTechnician=${body.idTechnician}&weekNumber=${body.weekNumber}`);
  }

  report(body) {
    return this.http.post<any>(`${this.URL}services/report`,body);
  }
}
