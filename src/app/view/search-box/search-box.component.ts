import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, ViewChild, ViewEncapsulation } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchBoxComponent {
  query = '';

  @ViewChild('input') input: ElementRef;

  constructor(private moviesService: MovieService, @Inject(DOCUMENT) private document: any) { }

  search() {
    this.moviesService.search(this.query);
    of([]).pipe(delay(100)).subscribe(() => this.document.querySelector('input').blur());
  }
}
