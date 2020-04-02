

// step1: create a component 

import { Component } from '@angular/core'; // import the componenet  
import { CoursesService } from './courses.service';

// invoke the Component from angular core library and passing the object with html and css 
@Component({
    selector: 'courses', // For css selector: <div class="course"> ".courses" or id="course" "#course" or <course>
    template: `
    <h2> {{"Title: " +  getTitle()}} </h2>
    <ul>
      <li *ngFor="let course of courses"> 
          {{course}}
      </li>
    </ul>
    ` // html markup // Angular is going to render the template for this component in the DOM <data binding>

})

// in order to convert to the component, it needs to add meta data to it that Angular understands
export class CourseComponent{
   title = "List of courses";  // property: title 

   getTitle(){  // method: getTitle()
      return this.title;
   };
   courses; // property: courses
   // by using constructor to get access from "service.getCourse data"
   // usually by using consturctor to get http endpoint data and assigned it to courses



   // Add Logic for calling an HTTP service in this component class
   // please see courses.service.ts file

// option 1: create constructor
// constructor is to initilize the object
//    constructor(){
//        let service = new CoursesService();
//        this.courses = service.getCourse();

//    }

// option 2： create constructor - a better way
// consturctor has a dependency, the type is service, courseService
// it creates the dependency of the CourseService and passed it to the constructor
   constructor(service: CoursesService){
      this.courses = service.getCourse();
   }
}