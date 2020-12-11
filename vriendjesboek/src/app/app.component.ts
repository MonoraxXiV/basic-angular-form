import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Friend} from './friend';
import {AddFriendService} from './add-friend.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private addFriendService: AddFriendService;

  title = 'vriendjesboek';
  languages = ['HTML', 'CSS', 'JavaScript', 'PHP', 'Ruby'];
  friendModel = new Friend(null, null, null, null, null);

  constructor(addFriendService: AddFriendService) {
    this.addFriendService = addFriendService;
  }
  onSubmit(): void {
    const observable = this.addFriendService.addFriend();
    // added quotation marks to "it worked", might need to remove those later
    observable.subscribe(data => "it worked", error => "it didn't work").
    console.log(this.friendModel);
  }

}

