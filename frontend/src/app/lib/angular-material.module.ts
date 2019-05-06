import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule
  ],
  exports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule
  ]
})
export class AngularMaterialModule { }
