import { Component, OnInit } from '@angular/core';

import { Movie } from './../../model/movie';
import { MovieService } from './../../service/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  cols: number;

  movies: Movie[] = [];

  searchTerms = "the empire strikes back";

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.adjustColumns(window.innerWidth);
    this.movieService.getUpcoming().subscribe(movies => this.movies = movies);
  }

  onResize(event: any) {
    this.adjustColumns(event.target.innerWidth);
  }

  loadNextPage() {
    this.movieService.loadNextPage().subscribe(movies => this.movies = this.movies.concat(movies));
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

}
