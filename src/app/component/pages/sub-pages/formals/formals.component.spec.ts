import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormalsComponent } from './formals.component';

describe('FormalsComponent', () => {
  let component: FormalsComponent;
  let fixture: ComponentFixture<FormalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
