import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.scss']
})
export class DependencyInjectionComponent implements OnInit {

  constructor(private userService: UserService) { }
  value: string = '';
  ngOnInit(): void {
    this.userService.testVariable += 'from DI';
    this.value = this.userService.testVariable;
  }
}
