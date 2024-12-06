import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyethnicComponent } from './dailyethnic.component';

describe('DailyethnicComponent', () => {
  let component: DailyethnicComponent;
  let fixture: ComponentFixture<DailyethnicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyethnicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyethnicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
