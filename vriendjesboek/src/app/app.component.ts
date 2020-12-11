import { Component } from '@angular/core';
import {Friend} from './friend';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vriendjesboek';
  languages = ['HTML', 'CSS', 'JavaScript', 'PHP', 'Ruby'];
  friendModel = new Friend(null,null,null,null,null);
  onSubmit(): void {
    console.log(this.friendModel);
  }

}

