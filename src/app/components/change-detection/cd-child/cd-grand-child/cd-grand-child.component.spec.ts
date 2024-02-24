import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdGrandChildComponent } from './cd-grand-child.component';

describe('CdGrandChildComponent', () => {
  let component: CdGrandChildComponent;
  let fixture: ComponentFixture<CdGrandChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdGrandChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdGrandChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
