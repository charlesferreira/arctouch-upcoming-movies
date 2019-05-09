import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/model/movie';

import { MovieService } from './../../service/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  cols: number;

  constructor(private movieService: MovieService) {}

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
}
