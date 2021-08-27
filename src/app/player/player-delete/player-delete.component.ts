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
  book: Iplayer = {};
  message: string;
  constructor(private bookService: PlayerService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.bookService.findBookById(this.id).subscribe(data => {
      this.book = data;
    });
  }

  deleteThisBook() {
    this.bookService.deleteBook(this.id).subscribe(data => {
      alert('xóa thành cônng')
      this.router.navigate(['/player'])
    });

  }

}
