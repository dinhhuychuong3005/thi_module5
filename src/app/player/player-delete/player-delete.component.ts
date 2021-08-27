import { Component, OnInit } from '@angular/core';
import {IBooks} from '../../model/ibooks';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-delete',
  templateUrl: './player-delete.component.html',
  styleUrls: ['./player-delete.component.css']
})
export class PlayerDeleteComponent implements OnInit {

  id: number;
  book: IBooks = {};
  message: string;
  constructor(private bookService: BookService,
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
