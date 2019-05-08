import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from './../model/movie';
import { ApiService } from './api.service'; import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient, private api: ApiService) { }

  url: string;
  page: number;
  params: any = {};

  getUpcoming(): Observable<Movie[]> {
    return this.request(this.api.urlFor('/movies/upcoming'));
  }

  request(url: string, params: any = {}, page: number = 1): Observable<Movie[]> {
    this.url = url;
    this.page = page;
    this.params = params;
    this.params.page = page;
    return this.http.get<Movie[]>(url, { params });
  }

  loadNextPage(): Observable<Movie[]> {
    return this.request(this.url, this.params, this.page + 1).pipe(delay(2000));
  }
}
