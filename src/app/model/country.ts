import { RegionalBloc } from './regionalBloc';
import { Language } from './language';
import { Currency } from './currency';
export class Country {
    name: string;
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    region: string;
    subregion: string;
    population: number;
    latlng: number[];
    demonym: string;
    area: number;
    gini: number;
    timezones: string[];
    borders: string[];
    nativeName: string;
    numericCode: string;
    currencies: Currency;
    languages: Language;
    flag: string;
    regionalBlocs: RegionalBloc;
    cioc: string;

}