import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PlayerService} from '../../service/player.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {

  playerForm: FormGroup;
  message: string;

  constructor(
    private playerService: PlayerService
  ) {
  }

  ngOnInit(): void {
    this.playerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      champ: new FormControl('', [Validators.required]),
      kda: new FormControl('', [Validators.required]),
      des: new FormControl()
    });
  }

  submit() {
    const data = this.playerForm.value;
    console.log(data);
    this.playerService.createPlayer(data).subscribe(dataSave => {
      console.log(dataSave);
      console.log(this.playerService.getAllPlayers());
      this.message = 'Bạn đã thêm mới thành công';
    }, e => {
      console.log(e);
    });

  }

  get name() {
    return this.playerForm.get('name');
  }
  get champ() {
    return this.playerForm.get('champ');
  }
  get kda() {
    return this.playerForm.get('kda');
  }
  get des() {
    return this.playerForm.get('des');
  }

}
