import {Component, OnInit} from '@angular/core';
import {PlayerService} from '../../service/player.service';
import {ActivatedRoute} from '@angular/router';
import {Iplayer} from '../../model/iplayer';

@Component({
  selector: 'app-book-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {
  book: Iplayer = {

  };
  id: number;

  constructor(private bookService: PlayerService,
              private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.paramMap.subscribe(data1 => {
      this.id = +data1.get('id');
      this.bookService.findBookById(this.id).subscribe(data => {
        this.book = data;
      });
    });
  }

  ngOnInit(): void {
  }

}
