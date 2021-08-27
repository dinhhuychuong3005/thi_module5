import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from './player/player-list/book-list.component';
import {PlayerCreateComponent} from './player/player-create/player-create.component';
import {PlayerDeleteComponent} from './player/player-delete/player-delete.component';
import {BookEditComponent} from './player/player-edit/book-edit.component';
import {BookDetailsComponent} from './player/player-details/book-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  {path: 'books', component: BookListComponent},
  {path: 'player/add', component: PlayerCreateComponent},
  {path: 'delete/:id', component: PlayerDeleteComponent},
  {path: 'edit/:id', component: BookEditComponent},
  {path: 'details/:id', component: BookDetailsComponent}
  ];

@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
