import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { TemplateReferenceComponent } from './components/template-reference/template-reference.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { DependencyInjectionComponent } from './components/dependency-injection/dependency-injection.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateReferenceComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'rxjs',
    component: RxjsComponent
  },
  {
    path: 'di',
    component: DependencyInjectionComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }