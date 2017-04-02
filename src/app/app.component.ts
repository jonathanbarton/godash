import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  ngOnInit() {
    this.rotateBackgroundImage();
  }

  rotateBackgroundImage() {
    function getRandomImage() {
      const _this = this;
      const d = new Date();
      const html = document.getElementsByTagName('html')[0];
      const endpoint = 'glitch';
      html.style.background=`url('http://localhost:4201/api/v1/${endpoint}?v=${d}') no-repeat center center fixed`;
      html.style.backgroundSize="cover";
      html.style.transition="all 0.5s linear";
      setTimeout(getRandomImage, 5000);
    }
    getRandomImage();
  }

}
