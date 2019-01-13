import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subjectDetails: Result;

  url = '/yy/getSubject/';

  constructor(private http: HttpClient,
              private route: ActivatedRoute) { }

  // 获取路由传入的参数
  id = this.route.snapshot.paramMap.get('id');

  ngOnInit() {
    console.log(this.id);
    this.http.get(this.url + this.id).subscribe(res => {
      this.subjectDetails = <Result>res;
    });
  }

}

export class Result {
  code: number;
  msg: String;
  data: JSON;
}
