import {
  animate,
  animation,
  group,
  keyframes,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import { Component } from '@angular/core';

export const transAnimation = animation([
  style({
    width: '{{ width }}',
    // height: '{{ height }}',
    opacity: '{{ opacity }}',
  }),
  animate('{{ time }}'),
]);

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
          backgroundColor: '#aaa',
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
        useAnimation(transAnimation, {
          params: {
            width: 0,
            opacity: 1,
            time: '1s',
          },
        }),
      ]),
      transition('* => open', [
        animate(
          '3s',
          keyframes([
            style({
              backgroundColor: 'yellow',
              transform: 'translateX(0px) rotate(72deg)',
              borderRadius: '10%',
            }),
            style({
              backgroundColor: 'purple',
              transform: 'translateX(50px) rotate(144deg)',
              borderRadius: '25%',
            }),
            style({
              backgroundColor: 'pink',
              transform: 'translateX(100px) rotate(216deg)',
              borderRadius: '50%',
            }),
            style({
              backgroundColor: 'green',
              transform: 'translateX(50px)  rotate(288deg)',
              borderRadius: '25%',
            }),
            style({
              backgroundColor: 'red',
              transform: 'translateX(0px) rotate(360deg)',
              borderRadius: '10%',
            }),
          ])
        ),
      ]),
    ]),
    trigger('myTrigger', [
      transition(':enter', [
        query('li', [
          style({ opacity: 0 }),
          stagger(1000, [animate('500ms', style({ opacity: 1 }))]),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  isOpen = true;
  isShown = true;
  title = 'angular-animation';
}
