import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book.service';
import {ActivatedRoute} from '@angular/router';
import {IBooks} from '../../model/ibooks';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: IBooks = {

  };
  id: number;

  constructor(private bookService: BookService,
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
