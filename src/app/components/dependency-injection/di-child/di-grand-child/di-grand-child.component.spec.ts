import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiGrandChildComponent } from './di-grand-child.component';

describe('DiGrandChildComponent', () => {
  let component: DiGrandChildComponent;
  let fixture: ComponentFixture<DiGrandChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiGrandChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiGrandChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
