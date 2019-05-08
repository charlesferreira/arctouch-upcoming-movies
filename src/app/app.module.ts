import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AngularMaterialModule } from './lib/angular-material.module';
import { MovieListInterceptorService } from './service/movie-list-interceptor.service';
import { FooterComponent } from './view/footer/footer.component';
import { HeroComponent } from './view/hero/hero.component';
import { MovieDetailsComponent } from './view/movie-details/movie-details.component';
import { MovieListItemComponent } from './view/movie-list-item/movie-list-item.component';
import { MovieListComponent } from './view/movie-list/movie-list.component';
import { SearchBoxComponent } from './view/search-box/search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    HeroComponent,
    MovieListComponent,
    MovieListItemComponent,
    MovieDetailsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MovieListInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [MovieDetailsComponent]
})
export class AppModule { }
