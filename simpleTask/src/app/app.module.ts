// Modules 
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// service get data API 
import { firstService } from './first/first.service';

// components 
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { TitleCaseComponent } from './title-case/title-case.component';

// pipes
import { CustomPipesClass } from './customPipe.pipe'

// Tips for FormsModules:   There are two changes:
// 1. You import FormsModule.
// 2. You add the FormsModule to the list of imports defined in the @NgModule decorator. 
// This gives the application access to all of the template-driven forms features, including ngModel.

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    TitleCaseComponent,
    CustomPipesClass
  ],
  imports: [
    BrowserModule,
    FormsModule,
//Because "template-driven forms" are in their own module,
//you need to add the FormsModule to the array of imports for the application module 
//before you can use forms.
  ],
  providers: [firstService], // register this service as a provider, Angular provides as a dependecy
  bootstrap: [AppComponent]
})
export class AppModule { }
