// TwoWayBindingModule.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TwoWayBindingComponent } from './two-way-binding.component';
import { TwoWayDataBindingChildModule } from './two-way-data-binding-child/two-way-data-binding-child.module'; // Import the child module here

@NgModule({
  declarations: [
    TwoWayBindingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TwoWayDataBindingChildModule // Include the imported child module here
  ],
  exports: [
    TwoWayBindingComponent
  ]
})
export class TwoWayBindingModule { }
