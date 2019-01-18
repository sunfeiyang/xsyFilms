import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Result;

  url = '/yy/getSubject/reviews/';

  constructor(private http: HttpClient,
              private route: ActivatedRoute) { }

  // 获取路由传入的参数
  id = this.route.snapshot.paramMap.get('id');

  ngOnInit() {
    this.http.get(this.url + this.id).subscribe(res => {
      this.reviews = <Result>res;
    });
  }

}

export class Result {
  code: number;
  msg: String;
  data: JSON;
}

