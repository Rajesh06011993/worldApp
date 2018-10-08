import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { RegionsComponent } from './regions/regions.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryViewComponent } from './country-view/country-view.component';
import { FiltersModule } from "./filters/filters.module";
import { WorldService } from "./world.service";


@NgModule({
  declarations: [
    AppComponent,
    RegionsComponent,
    CountriesComponent,
    CountryViewComponent
  ],
  imports: [
    BrowserModule,
    FiltersModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'regions', component: RegionsComponent, pathMatch: 'full'},
      {path: '', redirectTo:'regions',pathMatch:'full'},
      {path: 'countries/:regionName', component: CountriesComponent},
      {path: 'cview/:countryName', component: CountryViewComponent},
       {path:'*', component: RegionsComponent},
      {path:'**', component: RegionsComponent}
    ])
  ],
  providers: [WorldService],  
  bootstrap: [AppComponent]
})
export class AppModule { }
