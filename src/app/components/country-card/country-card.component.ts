import { Country } from './../../model/country';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css']
})
export class CountryCardComponent implements OnInit {

  @Input('country') country: Country;

  showDetails: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  inverseShowDetails() {
    this.showDetails = !this.showDetails;
  }

}
