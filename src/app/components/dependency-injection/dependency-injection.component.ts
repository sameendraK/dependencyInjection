import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpUserService, UserService } from 'src/app/services/user.service';
import { loggerToken, userToken } from 'src/app/tokens/tokens';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    UserService
  ]
})
export class DependencyInjectionComponent implements OnInit {

  constructor(
    // @Inject(userToken) private userService: UserService,
    // @Inject(loggerToken) private userService1: UserService,
    private router: Router,
    private injector: Injector,
    private cdr: ChangeDetectorRef,
    private userService: UserService
  ) {
    // console.log((this.injector)?.create{});
  }
  value: string = '';
  ngOnInit(): void {
    this.value = this.userService.testVariable;

    setTimeout(() => {
      // this.value = "changed from setTimeOut"
      // console.log('hi');
      // this.cdr.markForCheck();
      this.value = this.userService.testVariable;
      console.log(this.value);
    }, 200)
  }
  rxjsButtonClickHandler() {
    this.router.navigate(['/rxjs'])
  }
  ngOnDestroy() {
    console.log('destroyed DI component');
  }
}
