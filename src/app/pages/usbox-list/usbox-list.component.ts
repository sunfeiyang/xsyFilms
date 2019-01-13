import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-usbox-list',
  templateUrl: './usbox-list.component.html',
  styleUrls: ['./usbox-list.component.css']
})
export class UsboxListComponent implements OnInit {

  usbox: Result;

  url = '/yy/getusbox';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.usbox = <Result>res;
    });
  }

}

export class Result {
  code: number;
  msg: String;
  data: JSON;
}

