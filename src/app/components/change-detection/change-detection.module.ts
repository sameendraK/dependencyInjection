import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdChildComponent } from './cd-child/cd-child.component';
import { CdChildModule } from './cd-child/cd-child.module';
import { CdGrandChildModule } from './cd-child/cd-grand-child/cd-grand-child.module';
import { ChangeDetectionComponent } from './change-detection.component';
import { CdGrandChildComponent } from './cd-child/cd-grand-child/cd-grand-child.component';



@NgModule({
  declarations: [
    ChangeDetectionComponent,
    // CdChildComponent,
    // CdGrandChildComponent
  ],
  imports: [
    CommonModule,
    CdChildModule,
    CdGrandChildModule
  ],
  exports: [
    CdChildComponent
  ]
})
export class ChangeDetectionModule { }
