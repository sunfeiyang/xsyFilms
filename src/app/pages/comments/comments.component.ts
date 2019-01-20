import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieService, Result} from '../../servie/movie.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Result;

  constructor(private movieService: MovieService,
              private route: ActivatedRoute) { }

  // 获取路由传入的参数
  id = this.route.snapshot.paramMap.get('id');

  // 数据通过service请求
  getPage(): void {
    const details_type = 'comments';
    this.movieService.getDetails(details_type, this.id)
      .subscribe(res => this.comments = res);
  }

  ngOnInit() {
    this.getPage();
  }

}
