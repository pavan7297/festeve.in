import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthnicsComponent } from './ethnics.component';

describe('EthnicsComponent', () => {
  let component: EthnicsComponent;
  let fixture: ComponentFixture<EthnicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EthnicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EthnicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
