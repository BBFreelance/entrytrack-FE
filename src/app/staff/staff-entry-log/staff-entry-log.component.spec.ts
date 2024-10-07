import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffEntryLogComponent } from './staff-entry-log.component';

describe('StaffEntryLogComponent', () => {
  let component: StaffEntryLogComponent;
  let fixture: ComponentFixture<StaffEntryLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffEntryLogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffEntryLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
