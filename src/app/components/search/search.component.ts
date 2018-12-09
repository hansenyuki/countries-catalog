import { ISubscription } from 'rxjs/Subscription';
import { CountriesService } from './../../service/countries.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'countries-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Input() notFound: boolean;

  criteria: string;
  searchText: string;
  unsubscribeGetCountries: ISubscription;
  unsubscribeName: ISubscription;
  unsubscribeRegion: ISubscription;
  unsubscribeCode: ISubscription;
  unsubscribeCurrency: ISubscription;
  unsubscribeCapital: ISubscription;

  constructor(private countryService: CountriesService) { }

  ngOnInit() {
    this.notFound = false;
  }

  clearSearch(): void {
    this.criteria = '';
    this.searchText = '';
    this.notFound = false;
    this.unsubscribeGetCountries = this.countryService.getAllCountries().subscribe(res => {
      this.countryService.countryBehavior.next(res);
    });
  }
  search() {
    switch (this.criteria) {
      case 'name': {
        this.unsubscribeName = this.countryService.getCountriesByName(this.searchText).subscribe(res => {
          this.countryService.countryBehavior.next(res);
        });
        break;
      }
      case 'code': {
        this.unsubscribeCode = this.countryService.getCountriesByCode(this.searchText).subscribe(res => {
          this.countryService.countryBehavior.next(res);
        });
        break;
      }
      case 'currency': {
        this.unsubscribeCurrency = this.countryService.getCountriesByCurrency(this.searchText).subscribe(res => {
          this.countryService.countryBehavior.next(res);
        });
        break;
      }
      case 'capitalCity': {
        this.unsubscribeCapital = this.countryService.getCountriesByCapitalCity(this.searchText).subscribe(res => {
          this.countryService.countryBehavior.next(res);
        });
        break;
      }
      case 'region': {
        this.unsubscribeRegion = this.countryService.getCountriesByRegion(this.searchText).subscribe(res => {
          this.countryService.countryBehavior.next(res);
        });
        break;
      }
    }
  }

  ngOnDestroy(): void {
    if (this.unsubscribeGetCountries) { this.unsubscribeGetCountries.unsubscribe(); }
    if (this.unsubscribeName) { this.unsubscribeName.unsubscribe(); }
    if (this.unsubscribeRegion) { this.unsubscribeRegion.unsubscribe(); }
    if (this.unsubscribeCapital) { this.unsubscribeCapital.unsubscribe(); }
    if (this.unsubscribeCode) { this.unsubscribeCode.unsubscribe(); }
    if (this.unsubscribeCurrency) { this.unsubscribeCurrency.unsubscribe(); }
  }
}