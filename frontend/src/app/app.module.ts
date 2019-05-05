import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './angular-material.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './views/hero/hero.component';
import { SearchBoxComponent } from './views/search-box/search-box.component';

@NgModule({
  declarations: [AppComponent, SearchBoxComponent, HeroComponent],
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
