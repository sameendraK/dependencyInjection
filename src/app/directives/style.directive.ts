import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private element: ElementRef<any>) { }

  ngOnInit() {
    this.element.nativeElement.style.color = 'red'
  }
  @HostListener('mouseover')
  onMouseOver() {
    this.element.nativeElement.style.color = 'gold';
  }
  @HostListener('mouseout')
  onMouseOut() {
    this.element.nativeElement.style.color = 'red';
  }

}
 
// console.log("start");
// setTimeout(() => console.log("hi"), 0);
// Promise.resolve().then(() => {
//   console.log("resolved")
//   for (let i = 0; i < 100; i++) {
//     console.log(i)
//   }
// }
// )
// console.log("ended");