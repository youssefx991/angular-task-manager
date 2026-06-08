import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-my-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './my-header.html',
  styleUrl: './my-header.css',
})
export class MyHeader {
  logout() {
    localStorage.setItem('isLoggedIn', 'false');
  }
}
