import {
  animate,
  keyframes,
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
          backgroundColor: 'blue',
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
          '2.5s',
          keyframes([
            style({
              backgroundColor: 'yellow',
              width: '350px',
              height: '350px',
            }),
            style({ backgroundColor: 'red', width: '200px', height: '200px' }),
            style({
              backgroundColor: 'green',
              height: '*',
              width: '*',
            }),
          ])
        ),
      ]),
    ]),
    trigger('myTrigger', [
      transition(':leave', [
        animate('2s', style({ transform: 'translateX(100px)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class AppComponent {
  isOpen = true;
  isShown = true;
  title = 'angular-animation';
}
