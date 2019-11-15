import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrenciesComponent } from 'src/app/currencies/currencies.component';
import { CurrencyPlnComponent } from './currency-pln/currency-pln.component';
import { CurrencyUsdComponent } from './currency-usd/currency-usd.component';


@NgModule({
  declarations: [
    CurrenciesComponent,
    CurrencyPlnComponent,
    CurrencyUsdComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CurrenciesModule { }
