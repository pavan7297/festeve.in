import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurohitManagementScrrenComponent } from './purohit-management-scrren.component';

describe('PurohitManagementScrrenComponent', () => {
  let component: PurohitManagementScrrenComponent;
  let fixture: ComponentFixture<PurohitManagementScrrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurohitManagementScrrenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurohitManagementScrrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
