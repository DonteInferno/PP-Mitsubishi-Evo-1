import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomEvosComponent } from './custom-evos/custom-evos.component';
import { EvoHistoryComponent } from './evo-history/evo-history.component';
import { HomeComponent } from './home/home.component';
import { SignUpLogInComponent } from './sign-up-log-in/sign-up-log-in.component';
import { TitlesWonComponent } from './titles-won/titles-won.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: CustomEvosComponent,
    path: 'CustomEvos',
  },
  {
    component: EvoHistoryComponent,
    path: 'EvoHistory',
  },
  {
    component: SignUpLogInComponent,
    path: 'SignUpLogIn',
  },
  {
    component: TitlesWonComponent,
    path: 'TitlesWon',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
