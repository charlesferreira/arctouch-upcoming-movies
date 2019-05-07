import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AngularMaterialModule } from './lib/angular-material.module';
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
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MovieDetailsComponent]
})
export class AppModule { }
