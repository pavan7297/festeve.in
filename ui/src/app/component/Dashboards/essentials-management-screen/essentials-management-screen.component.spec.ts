import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssentialsManagementScreenComponent } from './essentials-management-screen.component';

describe('EssentialsManagementScreenComponent', () => {
  let component: EssentialsManagementScreenComponent;
  let fixture: ComponentFixture<EssentialsManagementScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EssentialsManagementScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EssentialsManagementScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
