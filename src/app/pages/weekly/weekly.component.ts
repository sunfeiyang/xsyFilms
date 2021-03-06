import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css']
})
export class WeeklyComponent implements OnInit {

  weekly: Result;

  url = '/yy/getweekly';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.weekly = <Result>res;
    });
  }

}

export class Result {
  code: number;
  msg: String;
  data: JSON;
}
