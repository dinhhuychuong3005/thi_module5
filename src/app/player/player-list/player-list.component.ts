import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PlayerService} from '../../service/player.service';
import {Iplayer} from '../../model/iplayer';

@Component({
  selector: 'app-book-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players: Iplayer[] = [];
  constructor(private playerService: PlayerService,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.reloadData();
  }

  private reloadData() {
    this.playerService.getAllPlayers().subscribe(data => {
      this.players = data;
    }, error => console.log(error));
  }

  detailsBook(id: number) {
    this.router.navigate(['details', id]);
  }

  deleteBook(id: number) {
    this.router.navigate(['delete', id]);
  }

  editPlayer(id: number) {
    this.router.navigate(['edit', id]);
  }

}
