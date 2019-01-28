import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  // 数据请求url
  url_inTheaters = '/yy/getinTheaters?count=20&start=0';
  url_comingSoon = '/yy/getcomingsoon?count=20&start=0';
  url_newMovies = '/yy/getnewMovies';
  url_usbox = '/yy/getusbox';
  url_top250 = '/yy/gettop250?count=20&start=0';
  url_reviews = '/yy/getSubject/reviews/';
  url_comments = '/yy/getSubject/comments/';
  url_photos = '/yy/getSubject/photos/';
  url_casts = '/yy/getSubject/casts/';
  url_videos = '/yy/getSubject/videos/';
  url_prevue = '/yy/getSubject/prevue/';

  // 数据请求方法
  getMovie(url): Observable<Result> {
    // @ts-ignore
    return this.http.get<Result[]>(url);
  }

  // 根据不同的culType请求不同的数据
  getData(m_type: String) {
    if (m_type === 'inTheaters') {
      return this.getMovie(this.url_inTheaters);
    } else if (m_type === 'comingSoon') {
      return this.getMovie(this.url_comingSoon);
    } else if (m_type === 'newMovies') {
      return this.getMovie(this.url_newMovies);
    } else if (m_type === 'usbox') {
      return this.getMovie(this.url_usbox);
    } else if (m_type === 'top250') {
      return this.getMovie(this.url_top250);
    }
  }

  // 根据所需数据类型及相应的参数，请求所需的数据
  getDetails(details_type: String, details_id: String) {
    if (details_type === 'reviews') {
      return this.getMovie(this.url_reviews + details_id);
    } else if (details_type === 'comments') {
      return this.getMovie(this.url_comments + details_id);
    } else if (details_type === 'photos') {
      return this.getMovie(this.url_photos + details_id);
    } else if (details_type === 'casts') {
      return this.getMovie(this.url_casts + details_id);
    } else if (details_type === 'videos') {
      return this.getMovie(this.url_videos + details_id);
    } else if (details_type === 'prevue') {
      return this.getMovie(this.url_prevue + details_id);
    }
  }
}

// 返回值类型
export class Result {
  code: number;
  msg: String;
  data: JSON;
}
