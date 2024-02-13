// TwoWayDataBindingChildModule.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoWayDataBindingChildComponent } from './two-way-data-binding-child.component';

@NgModule({
  declarations: [TwoWayDataBindingChildComponent],
  exports: [TwoWayDataBindingChildComponent],
  imports: [
    CommonModule
  ]
})
export class TwoWayDataBindingChildModule { }
