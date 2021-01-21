import { formatPercent } from '@angular/common';
import { Injectable } from '@angular/core';
import themes from '../assets/themes.json'

@Injectable({
  providedIn: 'root'
})
export class SetThemeService {


  static setTheme(theme) {
     for (var t in themes[theme]){
       document.body.style.setProperty(t, themes[theme][t])
     }
  }

  constructor() { }
}
