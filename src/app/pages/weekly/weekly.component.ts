import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css']
})
export class WeeklyComponent implements OnInit {

  array = [ 1, 2, 3, 4, 1, 2, 3, 4, 3, 4 ];

  constructor() { }

  ngOnInit() {
  }

}
