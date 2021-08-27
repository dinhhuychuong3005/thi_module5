import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Iplayer} from '../model/iplayer';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private baseUrl = 'http://localhost:3001/players';

  constructor(private http: HttpClient) {
  }

  getAllPlayers(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  // tslint:disable-next-line:ban-types
  createPlayer(player: Iplayer): Observable<Iplayer> {
    return this.http.post(this.baseUrl, player);
  }

  deletePlayer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  findPlayerById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updatePlayer(id: number, player: Iplayer): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, player);
  }
}
