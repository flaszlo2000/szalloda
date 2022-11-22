import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LakosztalyComponent } from './lakosztaly.component';

describe('LakosztalyComponent', () => {
  let component: LakosztalyComponent;
  let fixture: ComponentFixture<LakosztalyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LakosztalyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LakosztalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
