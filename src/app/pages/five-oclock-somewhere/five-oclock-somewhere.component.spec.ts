import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveOclockSomewhereComponent } from './five-oclock-somewhere.component';

describe('FiveOclockSomewhereComponent', () => {
  let component: FiveOclockSomewhereComponent;
  let fixture: ComponentFixture<FiveOclockSomewhereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiveOclockSomewhereComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiveOclockSomewhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
