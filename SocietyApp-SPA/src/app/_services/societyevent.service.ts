import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Societyevent } from '../_models/societyevent';

@Injectable({
  providedIn: 'root'
})
export class SocietyeventService {
  baseurl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getSocietyEvents(): Observable<Societyevent[]> {
    return this.http.get<Societyevent[]>(this.baseurl + 'societyevent');
  }
}
