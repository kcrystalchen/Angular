import { library } from '@fortawesome/fontawesome-svg-core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// API 
import { CoursesService } from './courses.service';

// components
import { AppComponent } from './app.component';
import { CourseComponent } from './courses.component';
import { StarComponent } from './star/star.component';
import { SingleCourseComponent } from './singleCourse/singleCourse.component';

// FontAwesomeModule Awesome#1
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
// importing the icons you you need and added them to the library inside the constructor
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faFish } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';


@NgModule({
  declarations: [
    AppComponent, 
    CourseComponent,  // Step2: register in the module.
    SingleCourseComponent, 
    StarComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule, // Awesom#2 imports FrontAwesomeModule 
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary){
    library.addIcons(faFilm, faFish, faCalendar, faCoffee); // add the imported icons (faFilm and faFish) from faFim to the library
  }
 }
