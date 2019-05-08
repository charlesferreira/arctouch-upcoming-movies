import { Component, OnInit } from '@angular/core';

import { MovieService } from './../../service/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  cols: number;

  constructor(public movieService: MovieService) { }

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

}
