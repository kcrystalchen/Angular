import { Component } from '@angular/core';
import { FontAwesomeModule, FaConfig } from '@fortawesome/angular-fontawesome';
// import { FaConfig } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';  // Awesome#4
import { faBaby } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import {faCalendar} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(faConfig: FaConfig){
    faConfig.defaultPrefix = 'far';
  }
title = 'Angular-app-TypeScript';
 faCoffee = faCoffee; //Awesome#3
 faBaby = faBaby;
 faFilm = faFilm;
 faCalendar = faCalendar;
  //appStar;
}
