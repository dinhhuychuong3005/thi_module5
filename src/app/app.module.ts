import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { PlayerCreateComponent } from './player/player-create/player-create.component';
import { PlayerEditComponent } from './player/player-edit/player-edit.component';
import { PlayerDeleteComponent } from './player/player-delete/player-delete.component';
import { PlayerDetailsComponent } from './player/player-details/player-details.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerCreateComponent,
    PlayerEditComponent,
    PlayerDeleteComponent,
    PlayerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
