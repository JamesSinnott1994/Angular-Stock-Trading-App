// Import the component annotation
import { Component } from '@angular/core';

// Define the component and its properties
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { // Create the component controller, with a single property
  title = 'stocks';
}
