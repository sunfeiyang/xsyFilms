import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {MovieService, Result} from '../../servie/movie.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subjectDetails: Result;

  constructor(private movieService: MovieService,
              private route: ActivatedRoute) { }

  // 获取路由传入的参数
  id = this.route.snapshot.paramMap.get('id');

  // 数据通过service请求
  getPage(): void {
    const details_type = 'details';
    this.movieService.getDetails(details_type, this.id)
      .subscribe(res => this.subjectDetails = res);
  }

  ngOnInit() {
    this.getPage();
  }

}
