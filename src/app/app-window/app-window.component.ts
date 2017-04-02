import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-window',
  templateUrl: './app-window.component.html',
  styleUrls: ['./app-window.component.scss']
})
export class AppWindowComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
