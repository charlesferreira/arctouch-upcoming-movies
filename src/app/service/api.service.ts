import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8080/v1';

  urlFor(endpoint: string, params: Map<string, any> = null): string {
    return this.baseUrl + endpoint + '?';
  }

}
