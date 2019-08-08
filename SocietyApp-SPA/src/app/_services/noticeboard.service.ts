import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticeboard } from '../_models/noticeboard';

@Injectable({
  providedIn: 'root'
})
export class NoticeboardService {
  baseurl = environment.apiUrl;

  constructor(private http: HttpClient) { }
  getNoticeboards(): Observable<Noticeboard[]> {
    return this.http.get<Noticeboard[]>(this.baseurl + 'noticeboard');
  }
}
