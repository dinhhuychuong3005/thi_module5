import { Component, OnInit } from '@angular/core';
import {Iplayer} from '../../model/iplayer';
import {PlayerService} from '../../service/player.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-delete',
  templateUrl: './player-delete.component.html',
  styleUrls: ['./player-delete.component.css']
})
export class PlayerDeleteComponent implements OnInit {

  id: number;
  player: Iplayer = {};
  message: string;
  constructor(private playerService: PlayerService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.playerService.findPlayerById(this.id).subscribe(data => {
      this.player = data;
    });
  }

  deleteThisPlayer() {
    this.playerService.deletePlayer(this.id).subscribe(data => {
      alert('xóa thành cônng')
      this.router.navigate(['/players'])
    });

  }

}
