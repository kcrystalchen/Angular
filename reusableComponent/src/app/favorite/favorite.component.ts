import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  // Define Input Property from Input method (Angular/core)
  @Input('is-favorite') isFavorite: boolean;
  // 
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.isFavorite = !this.isFavorite;
    console.log("isFavorite ts onClick() method updates" +" " + this.isFavorite);
    this.change.emit({newValue: this.isFavorite}); 
    // notify the others something is happening
    // the value that was passed into emit() will be available to all the subscriber in this event
  }

}

export interface FavoriteComponent {
  newValue: boolean
}
