import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JoinnowComponent } from './joinnow/joinnow.component';
import { RankingComponent } from './ranking/ranking.component';
import { TournamentComponent } from './tournament/tournament.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'ranking', component:RankingComponent},
  {path:'tournament', component:TournamentComponent},
  {path:'joinnow', component:JoinnowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
