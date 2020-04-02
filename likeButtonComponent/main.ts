import {LikeButtonComponent} from "./likeButton.component";

let likeButton = new LikeButtonComponent(100, true);
likeButton.likeButtonMethod();

console.log(`like button total: ${likeButton.totalCount} and button status: ${likeButton.buttonStatus}`);