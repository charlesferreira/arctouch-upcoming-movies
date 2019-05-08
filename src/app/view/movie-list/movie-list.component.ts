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

  loadingContent = true;

  constructor(private movieService: MovieService) { }

  private updateMovies = (movies: Movie[]) => {
    this.movies = movies;
    this.loadingContent = false;
  }

  ngOnInit() {
    this.adjustColumns(window.innerWidth);
    this.movieService.getUpcoming().subscribe(movies => this.updateMovies(movies));
  }

  onResize(event: any) {
    this.adjustColumns(event.target.innerWidth);
  }

  loadNextPage() {
    this.loadingContent = true;
    this.movieService.loadNextPage().subscribe(movies => this.updateMovies(this.movies.concat(movies)));
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
