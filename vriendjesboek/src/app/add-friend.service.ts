import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Friend} from './friend';

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public addFriend(): Friend {
    const url = '';
    return this.http.post(url, data);
  }
}
