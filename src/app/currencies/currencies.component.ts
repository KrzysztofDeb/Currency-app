import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/shared/services/currency.service';
import { Currency } from 'src/app/shared/models/currency';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html'
})
export class CurrenciesComponent implements OnInit {

  public currencyBTC: Currency;
  public currencyLTC: Currency;
  public currencyETH: Currency;

  constructor(private currencyService: CurrencyService) {
    this.currencyBTC = {};
    this.currencyLTC = {};
    this.currencyETH = {};
  }

  public ngOnInit(): void {
    this.currencyService.getCurrency('BTC').subscribe(
      res => {
        this.currencyBTC = res;
        this.currencyService.changeBTC(res);
      });
    this.currencyService.getCurrency('LTC').subscribe(
      res => {
        this.currencyLTC = res;
        this.currencyService.changeLTC(res);
      });
    this.currencyService.getCurrency('ETH').subscribe(
      res => {
        this.currencyETH = res;
        this.currencyService.changeETH(res);
      });
  }

}
