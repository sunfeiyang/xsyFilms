import { Component, OnInit } from '@angular/core';
import {MovieService, Result} from '../../servie/movie.service';

@Component({
  selector: 'app-top250',
  templateUrl: './top250.component.html',
  styleUrls: ['./top250.component.css']
})
export class Top250Component implements OnInit {

  top250: Result;

  constructor(private movieService: MovieService) { }

  // 数据通过service请求
  getPage(): void {
    const m_type = 'top250';
    this.movieService.getData(m_type)
      .subscribe(res => this.top250 = res);
  }

  ngOnInit() {
    this.getPage();
  }

}
