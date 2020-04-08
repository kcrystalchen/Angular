import { firstService } from './first.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'appFirst', // css sector
  //template: '<h2> hello </h2>',
  templateUrl:'./first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  firstTitle = "this is the first Component Titile" // property: firstTitle;
  appFirst;  // Field to hold the appFirst

  constructor(service: firstService) {
    this.appFirst = service.getKrystal();
   }

  

}
