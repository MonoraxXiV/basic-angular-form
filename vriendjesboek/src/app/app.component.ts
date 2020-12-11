import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Friend} from './friend';
import {AddFriendService} from './add-friend.service';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private addFriendService: AddFriendService;
  public allFriends;
  title = 'vriendjesboek';
  languages = ['HTML', 'CSS', 'JavaScript', 'PHP', 'Ruby'];
  friendModel = new Friend(null, null, null, null, null);

  constructor(addFriendService: AddFriendService) {
    this.addFriendService = addFriendService;
  }

  onSubmit(): void {
    const observable = this.addFriendService.addFriend(this.friendModel);
    // added quotation marks to "it worked", might need to remove those later
    observable.subscribe(
      succes => console.log(this.allFriends),
      error => console.log(error)
    );
    return console.log(this.friendModel);
  }

  public async displayFriend(url: string): Promise<any> {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return this.allFriends = await response.json();
  }

  ngOnInit(): any {
    this.displayFriend('http://localhost:9000/allFriends');
    console.log(this.displayFriend);
    }
}

