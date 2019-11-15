import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuardGuard } from './shared/guards/login-guard.guard';
import { FeaturesComponent } from './features/features.component';
import { CurrenciesComponent } from 'src/app/currencies/currencies.component';
import { BadDirectionComponent } from 'src/app/bad-direction/bad-direction.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'features',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'features',
    component: FeaturesComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'currencies',
    component: CurrenciesComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: '**',
    component: BadDirectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuardGuard]
})
export class AppRoutingModule {}
