import { ChangeDetectorRef, Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  templateUrl: './template-reference.component.html',
  styleUrls: ['./template-reference.component.scss']
})
export class TemplateReferenceComponent {

  constructor(
    private cdr: ChangeDetectorRef,
    private cr: ViewContainerRef
  ) {

  }
  @ViewChild('inputEle')
  inputEle!: ElementRef;
  ngOnInit() {

  }
  inputChangeHandler() {
    this.inputEle.nativeElement.value += 'i'
    console.log(this.inputEle.nativeElement.value);
    this.cdr.detectChanges
  }
  //this is used to log a message in console.
  clickHandler(){
    console.log("Hello, Clicked from HTML ")
  }
}
