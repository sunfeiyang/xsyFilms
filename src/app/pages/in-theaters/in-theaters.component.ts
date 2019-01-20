import { Component, OnInit } from '@angular/core';
import {MovieService, Result} from '../../servie/movie.service';

@Component({
  selector: 'app-in-theaters',
  templateUrl: './in-theaters.component.html',
  styleUrls: ['./in-theaters.component.css']
})
export class InTheatersComponent implements OnInit {

  inTheaters: Result;

  constructor(private movieService: MovieService) { }

  // 数据通过service请求
  getPage(): void {
    const m_type = 'inTheaters';
    // console.log(this.route.snapshot.paramMap);
    // const value_search = this.route.snapshot.paramMap.get('serachValue');
    this.movieService.getData(m_type)
      .subscribe(res => this.inTheaters = res);
  }

  ngOnInit() {
    this.getPage();
    // 下面的是本页面直接发送http请求的方法
    // this.http.get(this.url).subscribe(res => {
    //   this.inTheaters = <Result>res;
    // });
  }

}

