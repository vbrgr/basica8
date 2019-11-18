import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getCountries() {
    console.log(this.http.get('assets/data/countries.json'));
    return this.http.get('assets/data/countries.json');
  }
}
