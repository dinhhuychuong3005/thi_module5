import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PlayerListComponent} from './player/player-list/player-list.component';
import {PlayerCreateComponent} from './player/player-create/player-create.component';
import {PlayerDeleteComponent} from './player/player-delete/player-delete.component';
import {PlayerEditComponent} from './player/player-edit/player-edit.component';
import {PlayerDetailsComponent} from './player/player-details/player-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'players', pathMatch: 'full'},
  {path: 'players', component: PlayerListComponent},
  {path: 'player/add', component: PlayerCreateComponent},
  {path: 'delete/:id', component: PlayerDeleteComponent},
  {path: 'edit/:id', component: PlayerEditComponent},
  {path: 'details/:id', component: PlayerDetailsComponent}
  ];

@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
