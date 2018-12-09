import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountriesService } from './service/countries.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CountryComponent } from './components/country/country.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { AppRoutingModule } from './/app-routing.module';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountryCardComponent,
    CountryDetailsComponent,
    PaginatorComponent,
    SearchComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
        backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
        backdropBorderRadius: '4px',
        primaryColour: '#f44242', 
        secondaryColour: '#f44242', 
        tertiaryColour: '#f44242'
    })
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
