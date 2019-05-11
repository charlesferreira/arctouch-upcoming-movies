import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, ViewChild, ViewEncapsulation } from '@angular/core';
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

  constructor(
    private moviesService: MovieService,
    @Inject(DOCUMENT) private document: any
  ) {}

  search(event: any) {
    event.stopPropagation();
    this.input.nativeElement.blur();

    if (this.query.length > 0) {
      this.moviesService.search(this.query);
    } else {
      this.moviesService.loadUpcoming(true);
    }
  }
}
