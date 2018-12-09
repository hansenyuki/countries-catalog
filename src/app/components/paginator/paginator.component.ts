import { CountriesService } from './../../service/countries.service';
import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { Country } from '../../model/country';
import { ISubscription } from "rxjs/Subscription";

@Component({
  selector: 'countries-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit, OnDestroy {

  @Output() outputCountries = new EventEmitter<Country[]>();

  allCountries: Country[];
  countries: Country[];
  countriesByPage = 10;
  pageNumber = 1;
  notFound = false;
  isLoading: boolean = true;
  pages: number;
  unsubscribeBehavior: ISubscription;
  unsubscribeGetCountries: ISubscription;

  constructor(private countryService: CountriesService) { }

  ngOnInit() {
    this.getCountries(this.pageNumber, this.countriesByPage, null, null);
    this.unsubscribeBehavior = this.countryService.countryBehavior.subscribe(res => {
      this.allCountries = res;
      this.calculatePages();
      this.pageChange();
    });
  }

  getCountries(pageNumber: number, countriesByPage: number, filter: string, filterText: string): void {
    this.unsubscribeGetCountries = this.countryService.getAllCountries()
      .subscribe(res => {
        this.allCountries = res;
        this.countries = this.allCountries.slice(pageNumber * countriesByPage - countriesByPage, pageNumber * countriesByPage);
        this.calculatePages();
        this.notFound = this.allCountries.length === 0;
        this.outputCountries.emit(this.countries);
        this.isLoading = false;
        this.countryService.isLoadingBehavior.next(this.isLoading);
      });
  }

  // i would use this function if i had a service in this api that can provide the list
  // of countries depending on the page number
  pageChange2(): void {
    this.getCountries(this.pageNumber, this.countriesByPage, null, null);
    this.outputCountries.emit(this.countries);
  }

  pageChange(): void {
    this.countries = this.allCountries.slice(this.pageNumber * this.countriesByPage - this.countriesByPage, this.pageNumber * this.countriesByPage);
    this.outputCountries.emit(this.countries);
  }

  calculatePages() {
    this.pages = this.allCountries.length / this.countriesByPage;
  }

  ngOnDestroy(): void {
    if (this.unsubscribeBehavior) { this.unsubscribeBehavior.unsubscribe(); }
    if (this.unsubscribeGetCountries) { this.unsubscribeGetCountries.unsubscribe(); }
  }
}