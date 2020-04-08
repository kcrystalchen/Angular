import { Component, OnInit } from '@angular/core';
import { TitleCaseClassHero } from '../titleCaseClassHero';

@Component({
// The @Component selector value of "titleCaseForm" means 
// you can drop this form in a parent template with a <titleCaseForm> tag.

  selector: 'titleCaseForm',  
  templateUrl: './title-case.component.html',
  styleUrls: ['./title-case.component.css']
})
export class TitleCaseComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }


  // dummy data
  powersData = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

  // dummy data + invoke the TitleCaseClassHero class
  modelDummyData = new TitleCaseClassHero(100, "Dr. IQ", this.powersData[0], "Chuck Overstreet");

  submitted = false;

  onSubmit(){
    this.submitted = true;
    console.log(this.submitted);
  }

// return a JSON representation of the model
// help to see what you are doing during development purpose
get diagnostic(){
  return JSON.stringify(this.modelDummyData);
}

titleBinding: string;
}
