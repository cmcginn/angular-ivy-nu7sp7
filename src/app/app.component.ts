import { Component, VERSION } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [
    // animation triggers go here
  ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}
