import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { MostPopularAnimeComponent } from './most-popular-anime/most-popular-anime.component';
import { DisplayAnimeComponent } from './display-anime/display-anime.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
 
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { DatePipe } from './pipes/date.pipe';
import { DisplayUserComponent } from './display-user/display-user.component';
import { TopAnimesComponent } from './top-animes/top-animes.component';
import { CommentsPipe } from './pipes/comments.pipe'
import { LatestCommentsComponent } from './latest-comments/latest-comments.component';
import { NamesPipe } from './pipes/names.pipe'


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MainBodyComponent,
    MostPopularAnimeComponent,
    DisplayAnimeComponent,
    NavBarComponent,
    SignUpComponent,
    LogInComponent,
    DatePipe,
    DisplayUserComponent,
    TopAnimesComponent,
    CommentsPipe,
    LatestCommentsComponent,
    NamesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    CarouselModule, 
    WavesModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
