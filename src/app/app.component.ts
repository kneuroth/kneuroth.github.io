import { Component } from '@angular/core';
import { Location } from '@angular/common'; 
import { Router } from "@angular/router";
import links from '../assets/links.json'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  homeStatus: string;
  route: string;

  title = 'kneuroth';
  links = links;
  tiles = ['red','orange','yellow','green','blue','indigo', 'violet']

  constructor (location: Location, router: Router ){
    router.events.subscribe(val => {
      if (location.path() != "") {
        this.route = location.path();
        this.homeStatus = "home_empty"
      } else {
        this.route = "/home";
        this.homeStatus = "home_full";
      }
    });
  }
  
}
