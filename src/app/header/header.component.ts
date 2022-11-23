import { AfterViewInit, Component } from '@angular/core';
/*import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger,
} from '@angular/animations';*/
//import { flashAnimation } from 'angular-animations';

declare var anime: any; // declare like this
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // animations: [
  //   flashAnimation({ anchor: 'flash', duration: 15000 }),
  //   flashAnimation({ anchor: 'flash2', duration: 25000 }),
  //   flashAnimation({ anchor: 'flash3', duration: 35000 }),
  // ],
  /* animations: [
    trigger('stagger', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0 }),
            stagger(1000, [animate('0.5s', style({ opacity: 1 }))]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],*/
})
export class HeaderComponent implements AfterViewInit {
  // animState = false;
  items = [1, 2, 3, 4];
  show = true;
  ngAfterViewInit(): void {
    let myRandom;

    myRandom = Math.floor(Math.random() * 6 + 1);
    anime
      .timeline({
        loop: true,
        loopBegin: myRandom,
      })
      .add({
        targets: '.an-1',
        opacity: 0,
        duration: 1500,
        easing: 'easeOutExpo',
        direction: 'alternate',
        delay: Math.floor(1000 * Math.random()),
      })
      .add({
        targets: '.an-2',
        opacity: 0,
        duration: 2000,
        easing: 'easeOutExpo',
        delay: Math.floor(1500 * Math.random()),
      })
      .add({
        targets: '.an-3',
        opacity: 0,
        duration: 2500,
        easing: 'easeOutExpo',
        delay: Math.floor(2000 * Math.random()),
      })
      .add({
        targets: '.an-4',
        opacity: 0,
        duration: 3000,
        easing: 'easeOutExpo',
        delay: Math.floor(2500 * Math.random()),
      })
      .add({
        targets: '.an-5',
        opacity: 0,
        duration: 3500,
        easing: 'easeOutExpo',
        delay: Math.floor(3000 * Math.random()),
      })
      .add({
        targets: '.an-6',
        opacity: 0,
        duration: 4000,
        easing: 'easeOutExpo',
        delay: Math.floor(3500 * Math.random()),
      });
  }
}
