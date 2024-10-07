import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityAccessControlListComponent } from './security-access-control-list.component';

describe('SecurityAccessControlListComponent', () => {
  let component: SecurityAccessControlListComponent;
  let fixture: ComponentFixture<SecurityAccessControlListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityAccessControlListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityAccessControlListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
