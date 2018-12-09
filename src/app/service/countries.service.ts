import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { HttpClient } from '@angular/common/http';
import { Country } from '../model/country';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CountriesService {

  countriesUrl = environment.countriesApiUrl;
  countries: Country[] = [];
  isLoadingBehavior = new BehaviorSubject<boolean>(true);
  countryBehavior = new BehaviorSubject<Country[]>(this.countries);

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<Country[]> {
    let url = this.countriesUrl + "/all";
    return this.http.get<Country[]>(url);
  }

  getCountriesByName(name: string){
    let url = `${this.countriesUrl}/name/${name}?fullText=true`;
    return this.http.get<Country[]>(url);
  }

  getCountriesByCode(code: string){
    let url = `${this.countriesUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url);
  }

  getCountriesByCurrency(currency: string){
    let url = `${this.countriesUrl}/currency/${currency}`;
    return this.http.get<Country[]>(url);
  }

  getCountriesByCapitalCity(capital: string){
    let url = `${this.countriesUrl}/capital/${capital}`;
    return this.http.get<Country[]>(url);
  }

  getCountriesByRegion(region: string){
    let url = `${this.countriesUrl}/region/${region}`;
    return this.http.get<Country[]>(url);
  }

}
