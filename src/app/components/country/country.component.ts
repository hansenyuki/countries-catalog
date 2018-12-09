import { ISubscription } from 'rxjs/Subscription';
import { CountriesService } from './../../service/countries.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Country } from '../../model/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit, OnDestroy {

  allCountriesList: Country[];
  isLoading: boolean = true;
  unsubscribeBehavior: ISubscription;
  unsubscribeIsLoading: ISubscription;

  constructor(private CountryService: CountriesService) { }

  ngOnInit() {
    this.unsubscribeBehavior = this.CountryService.countryBehavior.subscribe(res => {
      this.allCountriesList = res;
    });
    this.unsubscribeIsLoading = this.CountryService.isLoadingBehavior.subscribe(res => {
      this.isLoading = res;
    })
  }

  onChanges($event) {
    this.allCountriesList = $event;
  }

  ngOnDestroy(): void {
    if (this.unsubscribeBehavior) { this.unsubscribeBehavior.unsubscribe(); }
    if (this.unsubscribeIsLoading) { this.unsubscribeIsLoading.unsubscribe(); }
  }

}
