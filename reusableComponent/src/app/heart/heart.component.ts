import { Component, Input} from '@angular/core';

@Component({
  selector: 'heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.css']
})
export class HeartComponent {

  @Input() isActive: boolean;
  @Input() likeCount: number;

  onClick(){
    this.isActive = !this.isActive;
    console.log("Heart Button: ", this.isActive);

    if(this.isActive === true){
       this.likeCount+=1;
    } else if (this.isActive === false){
      this.likeCount-=1;
    }

  }
}
