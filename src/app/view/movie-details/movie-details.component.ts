import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

import { Movie } from './../../model/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {

  @Input() movie: Movie;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.movie = data.movie;
  }

}
