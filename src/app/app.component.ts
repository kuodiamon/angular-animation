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
          backgroundColor: 'yellow',
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
      transition('open => close', [
        animate('3s', style({ opacity: 0.3 })),
        animate('2s'),
      ]),
      transition('* => open', [
        animate(
          '2s',
          keyframes([
            style({ backgroundColor: 'yellow' }),
            style({ backgroundColor: 'red' }),
            style({ backgroundColor: 'green' }),
          ])
        ),
      ]),
    ]),
  ],
})
export class AppComponent {
  isOpen = true;
  title = 'angular-animation';
}
