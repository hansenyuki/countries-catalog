import { Country } from './../../model/country';
import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../service/countries.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  country: Country;

  constructor(private route: ActivatedRoute, private countryService: CountriesService) { }

  ngOnInit() {
    this.getCountryDetails();
  }

  getCountryDetails() {
    const name = this.route.snapshot.paramMap.get('name');
    this.countryService.getCountriesByName(name).subscribe(res => {
      this.country = res[0];
    });
    
  }

}
