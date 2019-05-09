import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://upcoming-movies-api.herokuapp.com/v1';

  urlFor(endpoint: string): string {
    return this.baseUrl + endpoint;
  }

}
