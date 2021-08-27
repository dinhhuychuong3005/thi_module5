import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {IBooks} from '../../model/ibooks';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  id: number;
  book: IBooks;
  editBookForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    author: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required, Validators.minLength(100)])
  });
  message: string;
  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(data1 => {
      this.id = +data1.get('id')
      this.bookService.findBookById(this.id).subscribe(data => {
        // this.editBookForm = new FormGroup({
        //   title: new FormControl(data.title),
        //   author: new FormControl(data.author),cái
        //   description: new FormControl(data.description)
        // })
        this.editBookForm.patchValue(data);
      });
    })
  }

  submit(): void {

    const updatedBook = this.editBookForm.value;
    this.bookService.updateBook(this.id, updatedBook).subscribe(data => {
      this.message = 'Bạn đã sửa thành công cuốn sách rồi nhé';
    },error => {
      console.log(error)
    } );

  }
  get title() {
    return this.editBookForm.get('title');
  }
  get author() {
    return this.editBookForm.get('author');
  }
  get description() {
    return this.editBookForm.get('description');
  }

}
