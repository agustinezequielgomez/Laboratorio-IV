import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-animations',
  animations: [
    trigger('login', [
      state('beforeLogin', style({
        // left: '0px'
      })),
      state('afterLogin', style({
        right: '1000px'
      })),
      transition('beforeLogin => afterLogin', [
        animate('1s')
      ]),
      transition('afterLogin => beforeLogin', [
        animate('1s')
      ])
    ])
  ],
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css']
})
export class AnimationsComponent implements OnInit {

  public state = 'beforeLogin';
  constructor() { }

  ngOnInit() {
  }

  changeAnimation() {
    setTimeout(() => {
      this.state = 'afterLogin';
    }, 1500);
  }

}
