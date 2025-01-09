import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssentialstotallistComponent } from './essentialstotallist.component';

describe('EssentialstotallistComponent', () => {
  let component: EssentialstotallistComponent;
  let fixture: ComponentFixture<EssentialstotallistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EssentialstotallistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EssentialstotallistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
