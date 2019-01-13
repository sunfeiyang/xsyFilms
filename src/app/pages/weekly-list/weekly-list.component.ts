import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-weekly-list',
  templateUrl: './weekly-list.component.html',
  styleUrls: ['./weekly-list.component.css']
})
export class WeeklyListComponent implements OnInit {

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
