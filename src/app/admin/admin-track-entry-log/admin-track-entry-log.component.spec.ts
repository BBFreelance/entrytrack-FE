import { ComponentFixture, TestBed } from '@angular/core/testing';

import {AdminTrackEntryLogComponent } from './admin-track-entry-log.component';

describe('AdminTrackEntryLogComponent', () => {
  let component: AdminTrackEntryLogComponent;
  let fixture: ComponentFixture<AdminTrackEntryLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTrackEntryLogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTrackEntryLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
