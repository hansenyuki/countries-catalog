import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { CountryComponent } from './components/country/country.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/displayAll', pathMatch: 'full' },
  { path: 'displayAll', component: CountryComponent },
  { path: 'country/:name', component: CountryDetailsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
