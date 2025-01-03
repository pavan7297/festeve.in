import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductManagementScreenComponent } from './product-management-screen.component';

describe('ProductManagementScreenComponent', () => {
  let component: ProductManagementScreenComponent;
  let fixture: ComponentFixture<ProductManagementScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductManagementScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductManagementScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
