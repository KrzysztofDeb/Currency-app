import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Currency } from 'src/app/shared/models/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  public currentCurrencyBTC: Observable<Currency>;
  public currentCurrencyLTC: Observable<Currency>;
  public currentCurrencyETH: Observable<Currency>;
  private currencyBTC: BehaviorSubject<Currency>;
  private currencyLTC: BehaviorSubject<Currency>;
  private currencyETH: BehaviorSubject<Currency>;

  constructor(private http: HttpClient) {
    this.currencyBTC = new BehaviorSubject<Currency>({});
    this.currencyLTC = new BehaviorSubject<Currency>({});
    this.currencyETH = new BehaviorSubject<Currency>({});
    this.currentCurrencyBTC = this.currencyBTC.asObservable();
    this.currentCurrencyLTC = this.currencyLTC.asObservable();
    this.currentCurrencyETH = this.currencyETH.asObservable();
  }

  public getCurrency(mainCurrency: string): Observable<Currency> {
    return this.http.get('https://bitbay.net/API/Public/' + mainCurrency + 'PLN/ticker.json',
      {headers: {['Angular']: 'test'}});
  }

  public changeBTC(value: Currency): void {
    this.currencyBTC.next(value);
  }

  public changeLTC(value: Currency): void {
    this.currencyLTC.next(value);
  }

  public changeETH(value: Currency): void {
    this.currencyETH.next(value);
  }
}
