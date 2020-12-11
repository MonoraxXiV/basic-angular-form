import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Friend} from './friend';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public addFriend(data: Friend): Observable<any> {
    const url = 'http://localhost:9000/addFriend';
    return this.http.post(url, data);
  }
}
