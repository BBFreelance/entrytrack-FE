import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityTrackEntryLogComponent } from './security-track-entry-log.component';

describe('SecurityTrackEntryLogComponent', () => {
  let component: SecurityTrackEntryLogComponent;
  let fixture: ComponentFixture<SecurityTrackEntryLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityTrackEntryLogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityTrackEntryLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
