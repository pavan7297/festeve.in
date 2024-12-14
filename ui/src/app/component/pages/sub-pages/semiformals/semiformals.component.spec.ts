import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiformalsComponent } from './semiformals.component';

describe('SemiformalsComponent', () => {
  let component: SemiformalsComponent;
  let fixture: ComponentFixture<SemiformalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemiformalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemiformalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
