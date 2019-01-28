import { Component, OnInit } from '@angular/core';
import {MovieService, Result} from '../../servie/movie.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  videos: Result;

  constructor(private movieService: MovieService,
              private route: ActivatedRoute) { }

  // 获取路由传入的参数
  id = this.route.snapshot.paramMap.get('id');

  // 数据通过service请求
  getPage(): void {
    const details_type = 'videos';
    this.movieService.getDetails(details_type, this.id)
      .subscribe(res => this.videos = res);
  }

  ngOnInit() {
    this.getPage();
  }

}

