import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import { Observable, of } from 'rxjs';

import { Movie } from './../model/movie';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  isLoading: boolean;
  query: string;

  private movies: Movie[] = [];

  private url: string;
  private page: number;
  private params: any = {};
  private scrollingToTop = false;

  constructor(
    private http: HttpClient,
    private api: ApiService,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any
  ) {}

  getMovies(): Observable<Movie[]> {
    return of(this.movies);
  }

  loadUpcoming(scrollingToTop = false) {
    this.query = '';
    this.scrollingToTop = scrollingToTop;
    this.request(this.api.urlFor('/movies/upcoming'));
  }

  search(query: string) {
    this.scrollingToTop = true;
    this.query = query;
    if (query.length === 0) {
      return this.loadUpcoming();
    }

    this.request(this.api.urlFor('/movies/search'), { query });
  }

  loadNextPage() {
    this.scrollingToTop = false;
    this.request(this.url, this.params, this.page + 1);
  }

  private request(
    url: string,
    params: { [param: string]: string | string[] } = {},
    page: number = 1
  ) {
    this.isLoading = true;
    this.url = url;
    this.page = page;
    this.params = params;
    this.params.page = page;
    this.http.get<Movie[]>(url, { params }).subscribe(movies => {
      this.isLoading = false;
      this.movies = page === 1 ? movies : this.movies.concat(movies);
      if (this.scrollingToTop) {
        this.scrollToTop();
      }
    });
  }

  private scrollToTop() {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '#toolbar'
    });
  }
}
