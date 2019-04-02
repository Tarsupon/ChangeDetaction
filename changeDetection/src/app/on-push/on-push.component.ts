import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent implements OnInit {
  @Input() fromParent: number ;
  counter: number = 0;
  constructor() {
  }

  ngOnInit() {
    setInterval(()=>{
      this.counter++;
    }, 1000)
  }
}
