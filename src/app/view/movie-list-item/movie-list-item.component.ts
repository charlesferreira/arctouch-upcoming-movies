import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Movie } from '../../model/movie';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.scss']
})
export class MovieListItemComponent implements OnInit {
  @Input() movie: Movie;

  raised = false;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  showDetailsDialog() {
    const data = {
      movie: this.movie
    };
    this.dialog.open(MovieDetailsComponent, { data });
  }
}
