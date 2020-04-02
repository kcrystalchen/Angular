"use strict";
exports.__esModule = true;
var likeButton_component_1 = require("./likeButton.component");
var likeButton = new likeButton_component_1.LikeButtonComponent(100, true);
likeButton.likeButtonMethod();
console.log("like button total: " + likeButton.totalCount + " and button status: " + likeButton.buttonStatus);
