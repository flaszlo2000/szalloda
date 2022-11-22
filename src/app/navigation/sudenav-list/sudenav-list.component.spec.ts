import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudenavListComponent } from './sudenav-list.component';

describe('SudenavListComponent', () => {
  let component: SudenavListComponent;
  let fixture: ComponentFixture<SudenavListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SudenavListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SudenavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
