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
  public currency: Currency;

  constructor(private currencyService: CurrencyService) {
    this.currency = {};
  }

  public ngOnInit(): void {
    if (this.name === 'BTC/PLN') {
      this.currencyService.currentCurrencyBTC.subscribe(res => this.currency = res);
    }
    if (this.name === 'LTC/PLN') {
      this.currencyService.currentCurrencyLTC.subscribe(res => this.currency = res);
    }
    if (this.name === 'ETH/PLN') {
      this.currencyService.currentCurrencyETH.subscribe(res => this.currency = res);
    }
  }

}
