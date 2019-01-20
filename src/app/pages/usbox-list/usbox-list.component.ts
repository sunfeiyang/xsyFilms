import { Component, OnInit } from '@angular/core';
import {MovieService, Result} from '../../servie/movie.service';

@Component({
  selector: 'app-usbox-list',
  templateUrl: './usbox-list.component.html',
  styleUrls: ['./usbox-list.component.css']
})
export class UsboxListComponent implements OnInit {

  usbox: Result;

  constructor(private movieService: MovieService) { }

  // 数据通过service请求
  getPage(): void {
    const m_type = 'usbox';
    this.movieService.getData(m_type)
      .subscribe(res => this.usbox = res);
  }

  ngOnInit() {
    this.getPage();
  }

}
