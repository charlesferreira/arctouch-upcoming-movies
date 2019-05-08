import { Injectable } from '@angular/core';

import { Movie } from './../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  data: Movie[];

  constructor() { }

  getMovies(): Movie[] {
    return this.data;
  }

}
