import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable } from "rxjs/Observable";
import { forkJoin } from "rxjs/observable/forkJoin";

@Injectable()
export class WorldService {

  private regions_url = "https://restcountries.eu/rest/v2/region/";
  private country_url = "https://restcountries.eu/rest/v2/name/";
  private currency_url = "https://restcountries.eu/rest/v2/currency/";
  private language_url = "https://restcountries.eu/rest/v2/lang/";


  constructor(private _http: HttpClient) { }

  public getCountriesList(region: string) {
    let url = this.regions_url + region;
    return (this._http.get(url));
  }

  public getCountry(country: string) {
    let url = this.country_url + country + "?fullText=true";
    return (this._http.get(url));
  }

  public getCountriesListByCurrency(ccode: string) {
    let url = this.currency_url + ccode;
    return (this._http.get(url));
  }


  public getCountriesListByLanguage(lcode: string) {
    let url = this.language_url + lcode;
    return (this._http.get(url));
  }

}
