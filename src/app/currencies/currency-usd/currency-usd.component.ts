import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-currency-usd',
  templateUrl: './currency-usd.component.html',
  styleUrls: ['./currency-usd.component.scss']
})
export class CurrencyUsdComponent {

  @Input()
  public name: string;
  @Input()
  set value(value: number) {
    this.currencyValue = value * 3;
  }
  get value() {
    return this.currencyValue;
  }
  private currencyValue: number;

}
