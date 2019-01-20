import { Component, OnInit } from '@angular/core';
import {MovieService, Result} from '../../servie/movie.service';

@Component({
  selector: 'app-usbox',
  templateUrl: './usbox.component.html',
  styleUrls: ['./usbox.component.css']
})
export class USBoxComponent implements OnInit {

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
