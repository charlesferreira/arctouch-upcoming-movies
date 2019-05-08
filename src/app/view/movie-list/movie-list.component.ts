import { Component, OnInit } from '@angular/core';

import { Movie } from './../../model/movie';
import { MovieService } from './../../service/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[];

  cols: number;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
    this.adjustColumns(window.innerWidth);
  }

  onResize(event) {
    this.adjustColumns(event.target.innerWidth);
  }

  adjustColumns(windowWidth: number) {
    let cols: number;
    if (windowWidth < 600) {
      cols = 1;
    } else if (windowWidth < 960) {
      cols = 2;
    } else if (windowWidth < 1280) {
      cols = 3;
    } else {
      cols = 4;
    }

    this.cols = cols;
  }

}
