import {
  animate,
  group,
  keyframes,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    trigger('openClose', [
      // 定義狀態為 'open' 時的樣式
      state(
        'open',
        style({
          backgroundColor: '#ffffff',
        })
      ),

      // 定義狀態為 'close' 時的樣式
      state(
        'close',
        style({
          backgroundColor: 'green',
        })
      ),

      // 用 transition 定義狀態轉換時，元件該怎麼動作
      transition('open => close', [animate('3s')]),
      transition('* => open', [
        animate(
          '3s',
          keyframes([
            style({
              backgroundColor: 'yellow',
              transform: 'translateX(0px)',
            }),
            style({
              backgroundColor: 'purple',
              transform: 'translateX(50px)',
            }),
            style({
              backgroundColor: 'pink',
              transform: 'translateX(100px)',
            }),
            style({
              backgroundColor: 'green',
              transform: 'translateX(50px)',
            }),
            style({
              backgroundColor: 'red',
              transform: 'translateX(0px)',
            }),
          ])
        ),
        query('p', [
          animate('1s', style({ color: 'white' }))
        ])
        // group([


        // ]),
      ]),
    ]),
    trigger('myTrigger', [
      transition(':enter', [
        query('li', [
          style({opacity: 0}),
          stagger(1000, [
            animate('500ms', style({ opacity: 1 }))
          ])
        ])
      ]),
    ]),
  ],
})
export class AppComponent {
  isOpen = true;
  isShown = true;
  title = 'angular-animation';
}
