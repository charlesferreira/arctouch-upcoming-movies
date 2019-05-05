import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AngularMaterialModule } from './lib/angular-material.module';
import { HeroComponent } from './view/hero/hero.component';
import { SearchBoxComponent } from './view/search-box/search-box.component';
import { MovieListComponent } from './view/movie-list/movie-list.component';

@NgModule({
  declarations: [AppComponent, SearchBoxComponent, HeroComponent, MovieListComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
