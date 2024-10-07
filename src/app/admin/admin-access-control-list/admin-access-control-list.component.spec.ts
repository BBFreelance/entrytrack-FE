import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccessControlListComponent } from './admin-access-control-list.component';

describe('AdminAccessControlListComponent ', () => {
  let component: AdminAccessControlListComponent;
  let fixture: ComponentFixture<AdminAccessControlListComponent >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAccessControlListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccessControlListComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
