import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../../service/player.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Iplayer} from '../../model/iplayer';

@Component({
  selector: 'app-book-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css']
})
export class PlayerEditComponent implements OnInit {
  id: number;
  player: Iplayer;
  editPlayerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    champ: new FormControl('', [Validators.required]),
    kda: new FormControl('', [Validators.required]),
    des: new FormControl()
  });
  message: string;
  constructor(private bookService: PlayerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(data1 => {
      this.id = +data1.get('id')
      this.bookService.findPlayerById(this.id).subscribe(data => {
        // this.editBookForm = new FormGroup({
        //   title: new FormControl(data.title),
        //   author: new FormControl(data.author),cái
        //   description: new FormControl(data.description)
        // })
        this.editPlayerForm.patchValue(data);
      });
    })
  }

  submit(): void {

    const updatedBook = this.editPlayerForm.value;
    this.bookService.updatePlayer(this.id, updatedBook).subscribe(data => {
      this.message = 'Bạn đã sửa thành công rồi nhé';
    },error => {
      console.log(error)
    } );

  }
  get name() {
    return this.editPlayerForm.get('name');
  }
  get champ() {
    return this.editPlayerForm.get('champ');
  }
  get kda() {
    return this.editPlayerForm.get('kda');
  }
  get des() {
    return this.editPlayerForm.get('des');
  }

}
