import { Component, Input, OnInit } from '@angular/core';
import { Currency } from 'src/app/shared/models/currency';
import { CurrencyService } from 'src/app/shared/services/currency.service';

@Component({
  selector: 'app-currency-pln',
  templateUrl: './currency-pln.component.html',
  styleUrls: ['./currency-pln.component.scss']
})
export class CurrencyPlnComponent implements OnInit {

  @Input()
  public name: string;

  public currencyBTC: Currency;
  public currencyLTC: Currency;
  public currencyETH: Currency;

  constructor(private currencyService: CurrencyService) {
    this.currencyBTC = {};
    this.currencyLTC = {};
    this.currencyETH = {};
  }

  public ngOnInit(): void {
    if (this.name === 'BTC') {
      this.currencyService.currentCurrencyBTC.subscribe(res => this.currencyBTC = res);
    }
    if (this.name === 'LTC') {
      this.currencyService.currentCurrencyLTC.subscribe(res => this.currencyLTC = res);
    }
    if (this.name === 'ETH') {
      this.currencyService.currentCurrencyETH.subscribe(res => this.currencyETH = res);
    }
  }

}
