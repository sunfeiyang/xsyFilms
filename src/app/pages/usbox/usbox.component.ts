import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-usbox',
  templateUrl: './usbox.component.html',
  styleUrls: ['./usbox.component.css']
})
export class USBoxComponent implements OnInit {

  weekly: Result;

  url = '/yy/getusbox';

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
