import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  array = [ '/image/carousel/20180917115149_494.jpg', '/image/carousel/20181109150642_431.jpg', '/image/carousel/20181224114240_109.jpg', '/image/carousel/20190103164152_386.jpg' ];

  constructor() { }

  ngOnInit() {
  }

}
