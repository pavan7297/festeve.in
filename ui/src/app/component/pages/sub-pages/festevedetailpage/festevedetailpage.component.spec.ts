import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestevedetailpageComponent } from './festevedetailpage.component';

describe('FestevedetailpageComponent', () => {
  let component: FestevedetailpageComponent;
  let fixture: ComponentFixture<FestevedetailpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FestevedetailpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FestevedetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
