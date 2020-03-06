import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Movie } from 'src/app/model/movie';

import { MovieService } from './../../service/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  cols: number;

  constructor(
    private movieService: MovieService,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any
  ) { }

  get query(): string {
    return this.movieService.query;
  }

  get movies(): Observable<Movie[]> {
    return this.movieService.getMovies();
  }

  get isLoading(): boolean {
    return this.movieService.isLoading;
  }

  ngOnInit() {
    this.movieService.loadUpcoming();
    this.adjustColumns(window.innerWidth);
  }

  onResize(event: any) {
    this.adjustColumns(event.target.innerWidth);
  }

  adjustColumns(windowWidth: number) {
    if (windowWidth < 600) {
      this.cols = 1;
    } else if (windowWidth < 960) {
      this.cols = 2;
    } else if (windowWidth < 1280) {
      this.cols = 3;
    } else {
      this.cols = 4;
    }
  }

  onScroll() {
    this.movieService.loadNextPage();
  }

  resetUpcomingMovies() {
    this.movieService.loadUpcoming(true);
  }

  resetSearch() {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '#top'
    });
    of([]).pipe(delay(500)).subscribe(() => this.document.querySelector('input').focus());
  }
}
