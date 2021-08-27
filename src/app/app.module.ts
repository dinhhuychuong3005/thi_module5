import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookListComponent } from './player/player-list/book-list.component';
import { PlayerCreateComponent } from './player/player-create/player-create.component';
import { BookEditComponent } from './player/player-edit/book-edit.component';
import { PlayerDeleteComponent } from './player/player-delete/player-delete.component';
import { BookDetailsComponent } from './player/player-details/book-details.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    PlayerCreateComponent,
    BookEditComponent,
    PlayerDeleteComponent,
    BookDetailsComponent
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
