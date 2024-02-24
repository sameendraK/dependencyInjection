import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdGrandChildComponent } from './cd-grand-child.component';



@NgModule({
  declarations: [CdGrandChildComponent],
  imports: [
    CommonModule
  ],
  exports:[CdGrandChildComponent]
})
export class CdGrandChildModule { }
