import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Movie } from './../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieListInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<Movie[]>> {
    return next.handle(req).pipe(map(event => {
      if (event instanceof HttpResponse && event.body.results) {
        return event.clone({ body: this.transform(event.body) });
      }
      return event;
    }));
  }

  transform(body: any): Movie[] {
    const movies: Movie[] = [];
    body.results.forEach(result => movies.push({
      title: result.title,
      overview: result.overview,
      poster: result.poster_path,
      backdrop: result.backdrop_path,
      release: result.release_date,
      genres: result.genres.map(genre => genre.name)
    }));

    return movies;
  }

}
