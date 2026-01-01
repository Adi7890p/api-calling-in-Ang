import { Component } from '@angular/core';
import { ApicallerComponent } from "./apicaller/apicaller.component";
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ApicallerComponent],
  // templateUrl: './app.component.html',
  template:`
    <app-apicaller>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'apis';
}
