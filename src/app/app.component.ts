import { Component } from '@angular/core';
import { Location } from '@angular/common'; 
import { Router } from "@angular/router";
import links from '../assets/links.json'

import { SetThemeService } from './set-theme.service'
import { fromEventPattern } from 'rxjs';
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

  changeColor(){
    //document.body.style.setProperty('--footer-background',"#11b8ad")
    //SetThemeService.setTheme('grey')
  }

  constructor (location: Location, router: Router ){
    SetThemeService.setTheme('grey')
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
