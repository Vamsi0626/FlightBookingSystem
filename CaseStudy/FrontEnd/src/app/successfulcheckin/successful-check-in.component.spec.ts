import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulCheckInComponent } from './successful-check-in.component';

describe('SuccessfulCheckInComponent', () => {
  let component: SuccessfulCheckInComponent;
  let fixture: ComponentFixture<SuccessfulCheckInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfulCheckInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulCheckInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
