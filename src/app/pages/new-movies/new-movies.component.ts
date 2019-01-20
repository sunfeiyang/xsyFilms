import { Component, OnInit } from '@angular/core';
import {MovieService, Result} from '../../servie/movie.service';

@Component({
  selector: 'app-new-movies',
  templateUrl: './new-movies.component.html',
  styleUrls: ['./new-movies.component.css']
})
export class NewMoviesComponent implements OnInit {

  newMovies: Result;

  constructor(private movieService: MovieService) { }

  // 数据通过service请求
  getPage(): void {
    const m_type = 'newMovies';
    this.movieService.getData(m_type)
      .subscribe(res => this.newMovies = res);
  }

  ngOnInit() {
    this.getPage();
  }

}
