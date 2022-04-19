import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsernavigationComponent } from './usernavigation/usernavigation.component';
import { HomebackgroundComponent } from './homebackground/homebackground.component';
import { ShowCategoryComponent } from './show-category/show-category.component';
import { TodaySpecialComponent } from './today-special/today-special.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    UsernavigationComponent,
    HomebackgroundComponent,
    ShowCategoryComponent,
    TodaySpecialComponent,
    AboutusComponent,
    ContactusComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
