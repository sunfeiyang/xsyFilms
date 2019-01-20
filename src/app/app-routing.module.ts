import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailsComponent} from './details/details.component';
import {HomeComponent} from './home/home.component';
import {ListComponent} from './list/list.component';
import {AllRankComponent} from './all-rank/all-rank.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'list/:type', component: ListComponent},
  {path: 'allRank', component: AllRankComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
