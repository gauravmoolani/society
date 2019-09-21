import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Societyrule } from '../_models/societyrule';


@Injectable({
  providedIn: 'root'
})
export class SocietyruleService {

  baseurl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getSocietyRules(): Observable<Societyrule[]> {

    return this.http.get<Societyrule[]>(this.baseurl + 'societyrule');
  }



}
