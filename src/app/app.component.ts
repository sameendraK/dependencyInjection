import { ApplicationRef, Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testRuns';
  constructor(@Inject(ApplicationRef) private appRef: ApplicationRef) {}

  tick() {
    this.appRef.tick();
  }
}
