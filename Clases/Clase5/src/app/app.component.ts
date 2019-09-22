import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Animation } from './Classes/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    Animation
  ]
})
export class AppComponent {
  title = 'Laboratorio IV';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
