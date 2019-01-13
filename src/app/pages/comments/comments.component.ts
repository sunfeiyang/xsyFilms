import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Result;

  url = '/yy/subject/comments/';

  constructor(private http: HttpClient,
              private route: ActivatedRoute) { }

  // 获取路由传入的参数
  id = this.route.snapshot.paramMap.get('id');

  ngOnInit() {
    this.http.get(this.url + this.id).subscribe(res => {
      this.comments = <Result>res;
    });
  }

}

export class Result {
  code: number;
  msg: String;
  data: JSON;
}
