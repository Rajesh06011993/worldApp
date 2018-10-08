import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyFilterComponent } from './currency-filter/currency-filter.component';
import { LanguageFilterComponent } from './language-filter/language-filter.component';

import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'cFilter/:currency', component: CurrencyFilterComponent },
      { path: 'lFilter/:language', component: LanguageFilterComponent },
    ])
  ],
  declarations: [CurrencyFilterComponent, LanguageFilterComponent]
})
export class FiltersModule { }
