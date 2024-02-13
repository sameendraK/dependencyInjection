import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding-child',
  templateUrl: './two-way-data-binding-child.component.html',
  styleUrls: ['./two-way-data-binding-child.component.scss']
})
export class TwoWayDataBindingChildComponent {

  ngOnChanges() {
    console.log('ngOnChanges')
  }
  ngOnInit() {
    console.log("ngOnInit");
  }
  @Input()
  data: string[] = ['HI', 'hello'];
  @Input()
  singleData: string = ''

}
