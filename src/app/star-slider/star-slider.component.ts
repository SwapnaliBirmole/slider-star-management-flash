import { Component, OnInit } from '@angular/core';
import { Slick } from 'ngx-slickjs';
@Component({
  selector: 'app-star-slider',
  templateUrl: './star-slider.component.html',
  styleUrls: ['./star-slider.component.css'],
})
// export class StarSliderComponent implements OnInit {

//   constructor() {}

//   ngOnInit() {}
// }
export class StarSliderComponent {
  arrayLength = 10;
  showMore = false;
  text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus consectetur adipiscing elit.
  Etiam rhoncus consectetur adipiscing elit. Etiam rhoncus`;

  config: Slick.Config = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true,
  };

  getArray(count: number) {
    return new Array(count);
  }
}
