import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxeethnicComponent } from './luxeethnic.component';

describe('LuxeethnicComponent', () => {
  let component: LuxeethnicComponent;
  let fixture: ComponentFixture<LuxeethnicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuxeethnicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuxeethnicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
