import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HashLocationStrategy, LocationStrategy, registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { FilmsCardComponent } from './pages/films-card/films-card.component';
import { FooterComponent } from './footer/footer.component';
import { WeeklyComponent } from './pages/weekly/weekly.component';
import {SearchFormComponent} from './pages/search-form/search-form.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { NewMoviesComponent } from './pages/new-movies/new-movies.component';
import { InTheatersComponent } from './pages/in-theaters/in-theaters.component';
import { RatComponent } from './pages/rat/rat.component';
import { Top250Component } from './pages/top250/top250.component';
import { USBoxComponent } from './pages/usbox/usbox.component';
import { VideoComponent } from './pages/video/video.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { AllRankComponent } from './all-rank/all-rank.component';
import { UsboxListComponent } from './pages/usbox-list/usbox-list.component';
import { WeeklyListComponent } from './pages/weekly-list/weekly-list.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import {MovieService} from './servie/movie.service';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    FilmsCardComponent,
    FooterComponent,
    SearchFormComponent,
    WeeklyComponent,
    HomeComponent,
    DetailsComponent,
    ListComponent,
    ComingSoonComponent,
    PhotosComponent,
    NewMoviesComponent,
    InTheatersComponent,
    RatComponent,
    Top250Component,
    USBoxComponent,
    VideoComponent,
    MovieListComponent,
    AllRankComponent,
    UsboxListComponent,
    WeeklyListComponent,
    SubjectComponent,
    CommentsComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN },
    { provide: LocationStrategy, useClass: HashLocationStrategy, },
    MovieService, { provide: LocationStrategy, useClass: HashLocationStrategy, }],
  bootstrap: [AppComponent]
})
export class AppModule { }
