import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { CdChildComponent } from './cd-child/cd-child.component';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent implements OnInit {

  displayVal: string = '';
  apiResponse: any

  constructor(
    private cdr: ChangeDetectorRef,
    private http: HttpClient,
  ) {
    console.log("hello");
  }
  data: any;
  @ViewChild('cdChild')
  cdChild: CdChildComponent | undefined
  cdChildClickHandler() {
    if (this.cdChild) {
      this.cdChild.data = "this is text from parent component";
    }
    // this.cdr.detectChanges();
  }
  ngOnChanges() {
    console.log("on changes");
  }
  ngOnInit() {
    // setTimeout(() => {
    //   this.cdr.markForCheck();
    //   console.log(this.displayVal);
    //   this.displayVal = "changed";
    // }, 300)
    this.displayVal = "Initial text";
    this.data = "hello"
    console.log('this.data')
    this.cdr.detectChanges();
    this.http.get('https://dummyjson.com/products/1').subscribe((res) => {
      this.displayVal = "changed";
      console.log(res);
      // this.data = res;
      this.apiResponse = res;
      this.cdr.detectChanges();
    });
  }
  clickHandler() {
    // setTimeout(() => {
    // }, 3000)
    this.displayVal = "clicked";
  }
}
