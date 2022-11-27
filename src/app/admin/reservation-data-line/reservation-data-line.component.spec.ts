import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationDataLineComponent } from './reservation-data-line.component';

describe('ReservationDataLineComponent', () => {
  let component: ReservationDataLineComponent;
  let fixture: ComponentFixture<ReservationDataLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationDataLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationDataLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
