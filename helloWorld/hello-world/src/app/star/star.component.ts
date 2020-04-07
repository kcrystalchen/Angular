import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';  // Awesome#4
import { faBaby } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import {faCalendar} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'appStar',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {
 star: boolean; // field 
 faCoffee = faCoffee; //Awesome#3
 faBaby = faBaby;
 faFilm = faFilm;
 faCalendar = faCalendar;
  //appStar;
  onClick(){
    // if (this.star === false){
    //   console.log(true);
    //   return true;
    // } else {
    //   console.log(false);
    //   return true;
    // }


    this.star = !this.star;
  }



}
