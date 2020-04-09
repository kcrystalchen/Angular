import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { BootStrapPanelComponent } from './boot-strap-panel/boot-strap-panel.component';
import { HeartComponent } from './heart/heart.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    BootStrapPanelComponent,
    HeartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
