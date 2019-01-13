import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  Result_list: Result;

  url_inTheaters = '/yy/getinTheaters?count=20&start=0';

  url_comingSoon = '/yy/getcomingsoon?count=20&start=0';

  constructor(private http: HttpClient,
              private route: ActivatedRoute) { }

  // 获取路由传入的参数
  type = this.route.snapshot.paramMap.get('type');

  ngOnInit() {
    if (this.type === 'inTheaters') {
      this.http.get(this.url_inTheaters).subscribe(res => {
        this.Result_list = <Result>res;
      });
    } else if (this.type === 'comingSoon') {
      this.http.get(this.url_comingSoon).subscribe(res => {
        this.Result_list = <Result>res;
      });
    }
  }

}

export class Result {
  code: number;
  msg: String;
  data: JSON;
}

