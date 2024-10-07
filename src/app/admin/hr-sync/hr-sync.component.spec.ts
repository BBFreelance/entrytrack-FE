import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrSyncComponent } from './hr-sync.component';

describe('HrSyncComponent', () => {
  let component: HrSyncComponent;
  let fixture: ComponentFixture<HrSyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HrSyncComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrSyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
