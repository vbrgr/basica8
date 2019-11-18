import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  text: string;

  results: string[];
  country: any;

  countries: any[];

  filteredCountriesSingle: any[];

  filteredCountriesMultiple: any[];

  brands: string[] = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'VW'];

  filteredBrands: any[];

  brand: string;

  constructor(private countryService: CountryService) { }

  filterCountrySingle(event) {
      const query = event.query;
      this.countryService.getCountries().subscribe(result => {
        const obj = result['data'];
        const countries = [];
        // tslint:disable-next-line: forin
        for (const key in obj) {
          countries.push(obj[key]);
        }
        this.filteredCountriesSingle = this.filterCountry(query, countries);
      });
  }

  filterCountryMultiple(event) {
      const query = event.query;
      this.countryService.getCountries().subscribe((res) => {
        const obj = res['data'];
        const countries = [];
        // tslint:disable-next-line: forin
        for (const key in obj) {
          countries.push(obj[key]);
        }
        this.filteredCountriesMultiple = this.filterCountry(query, countries);
      });
  }

  filterCountry(query, countries: any[]): any[] {
      // in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
      const filtered: any[] = [];
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < countries.length; i++) {
          const country = countries[i];
          if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
              filtered.push(country);
          }
      }
      return filtered;
  }

  filterBrands(event) {
      this.filteredBrands = [];
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.brands.length; i++) {
          const brand = this.brands[i];
          if (brand.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
              this.filteredBrands.push(brand);
          }
      }
  }

  ngOnInit() {
  }

}
