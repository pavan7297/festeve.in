import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurohitComponent } from './purohit.component';

describe('PurohitComponent', () => {
  let component: PurohitComponent;
  let fixture: ComponentFixture<PurohitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurohitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurohitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
