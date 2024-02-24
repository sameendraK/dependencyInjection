import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependencyInjectionComponent } from './dependency-injection.component';
import { DiChildComponent } from './di-child/di-child.component';
import { UserService } from 'src/app/services/user.service';



@NgModule({
  declarations: [DependencyInjectionComponent, DiChildComponent],
  imports: [
    CommonModule
  ],
  providers: []
})
export class DependencyInjectionModule { }
