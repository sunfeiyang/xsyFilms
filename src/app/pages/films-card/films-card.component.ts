import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films-card',
  templateUrl: './films-card.component.html',
  styleUrls: ['./films-card.component.css']
})
export class FilmsCardComponent implements OnInit {

  array = [ 1, 2, 3, 4, 1, 2, 3, 4 ];

  constructor() { }

  ngOnInit() {
  }

}
