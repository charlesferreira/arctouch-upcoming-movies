import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlFor(endpoint: string): string {
    return environment.apiUrl + endpoint;
  }

}
