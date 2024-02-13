import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayDataBindingChildComponent } from './two-way-data-binding-child.component';

describe('TwoWayDataBindingChildComponent', () => {
  let component: TwoWayDataBindingChildComponent;
  let fixture: ComponentFixture<TwoWayDataBindingChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayDataBindingChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayDataBindingChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
