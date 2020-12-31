import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Slick-Slider';
  showNavigationArrows = true;
  showNavigationIndicators = true;
  data = [{ image: 'assets/images/bike.jpg', para: 'This is para', link: 'https://google.com' },
  { image: 'assets/images/bike2.jpg', para: 'This is para 2', link: 'https://github.com' }
  ];
  style = {
    width: '100vw',
    height: '100vh'
  };
}
