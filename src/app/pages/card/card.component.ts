import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  array = [ 1, 2, 3, 4, 1, 2, 3, 4 ];

  constructor() { }

  ngOnInit() {
  }

}
