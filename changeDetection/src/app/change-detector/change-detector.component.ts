import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-change-detector',
  templateUrl: './change-detector.component.html',
  styleUrls: ['./change-detector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectorComponent implements OnInit {
  @Input() fromParent: number ;
  counter: number = 0;

  constructor(private ref: ChangeDetectorRef) {
  }

  ngOnInit() {

    setInterval(()=>{
      this.counter++;
      this.ref.detectChanges();
      console.log("change detection was here, probably, i dont know");
    }, 1000);
  }

}
