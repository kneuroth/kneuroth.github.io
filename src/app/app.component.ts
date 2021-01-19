import { Component } from '@angular/core';
import links from '../assets/links.json'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kneuroth';
  links = links
}
