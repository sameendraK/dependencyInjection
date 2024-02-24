import { ChangeDetectionStrategy, Component, Input, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cd-child',
  templateUrl: './cd-child.component.html',
  styleUrls: ['./cd-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdChildComponent {
  @Input()
  inputVal: any;
  @Input()
  data: any;
  ngOnChanges(changes: SimpleChanges) {
    console.log("changes", changes)
    console.log("Api Respone", this.inputVal)
  }
  ngDoCheck() {
    console.log("ngDoCheck")
    console.log("ngDoCheck Api Respone", this.inputVal)
  }

}
