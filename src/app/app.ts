import { Component } from '@angular/core';
import { MyHeader } from "../components/my-header/my-header";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [MyHeader, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
