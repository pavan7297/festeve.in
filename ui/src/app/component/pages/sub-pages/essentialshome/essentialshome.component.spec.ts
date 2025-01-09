import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssentialshomeComponent } from './essentialshome.component';

describe('EssentialshomeComponent', () => {
  let component: EssentialshomeComponent;
  let fixture: ComponentFixture<EssentialshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EssentialshomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EssentialshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
