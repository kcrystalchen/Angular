import { FavoriteComponent } from './favorite/favorite.component';
import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'reusableComponent';


// favorite component: dummy data
  post = {
    title: "Title",
    isFavorite: true
  }

// passing data when raising this event
// onFavoriteChanged is the subscribe of the change event from favorite component
  onFavoriteChanged(eventArgs: FavoriteComponent ){
    console.log("onFavorite changed: ", eventArgs);
  }


// heart component: dummy data
  tweet = {
    body: 'Here is the body of a tweet...',
    isLike: true,
    likeCount: 10
  }

}
