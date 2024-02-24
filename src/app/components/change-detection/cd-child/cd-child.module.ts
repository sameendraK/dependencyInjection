import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdGrandChildComponent } from './cd-grand-child/cd-grand-child.component';
import { CdGrandChildModule } from './cd-grand-child/cd-grand-child.module';
import { CdChildComponent } from './cd-child.component';



@NgModule({
  declarations: [
    CdChildComponent
  ],
  imports: [
    CommonModule,
    CdGrandChildModule
  ],
  exports: [
    CdChildComponent
  ]
})
export class CdChildModule { }
