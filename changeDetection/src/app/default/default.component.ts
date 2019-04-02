import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class DefaultComponent implements OnInit {
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
