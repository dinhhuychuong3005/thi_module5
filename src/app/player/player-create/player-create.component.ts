import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {

  addBookForm: FormGroup;
  message: string;

  constructor(
    private bookService: BookService
  ) {
  }

  ngOnInit(): void {
    this.addBookForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      author: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  submit() {
    const data = this.addBookForm.value;
    console.log(data);
    this.bookService.createBook(data).subscribe(dataSave => {
      console.log(dataSave);
      console.log(this.bookService.getAllBooks());
      this.message = 'Bạn đã thêm mới thành công';
    }, e => {
      console.log(e);
    });

  }

  get title() {
    return this.addBookForm.get('title');
  }

  get author() {
    return this.addBookForm.get('author');
  }

  get description() {
    return this.addBookForm.get('description');
  }

}
