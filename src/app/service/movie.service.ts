import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Movie } from './../model/movie';
import { ApiService } from './api.service'; import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  loading: boolean;
  query: string;

  private movies: Movie[] = [];

  private url: string;
  private page: number;
  private params: any = {};

  constructor(private http: HttpClient, private api: ApiService) { }

  getMovies(): Observable<Movie[]> {
    return of(this.movies);
  }

  loadUpcoming() {
    this.request(this.api.urlFor('/movies/upcoming'));
  }

  search(query: string) {
    this.query = query;
    if (query.length === 0) {
      return this.loadUpcoming();
    }

    this.request(this.api.urlFor('/movies/search'), { query });
  }

  loadNextPage() {
    this.request(this.url, this.params, this.page + 1);
  }

  private request(url: string, params: { [param: string]: string | string[] } = {}, page: number = 1) {
    this.loading = true;
    this.url = url;
    this.page = page;
    this.params = params;
    this.params.page = page;
    this.http.get<Movie[]>(url, { params }).subscribe(movies => {
      this.loading = false;
      this.movies = page === 1 ? movies : this.movies.concat(movies);
    });
  }
}
