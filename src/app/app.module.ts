import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FeaturesComponent } from './features/features.component';
import { LoginGuardGuard } from 'src/app/shared/guards/login-guard.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CurrencyService } from 'src/app/shared/services/currency.service';
import { HttpClientModule } from '@angular/common/http';
import { CurrenciesModule } from 'src/app/currencies/currencies.module';
import { BadDirectionComponent } from './bad-direction/bad-direction.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FeaturesComponent,
    BadDirectionComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CurrenciesModule
  ],
  providers: [LoginGuardGuard, CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
