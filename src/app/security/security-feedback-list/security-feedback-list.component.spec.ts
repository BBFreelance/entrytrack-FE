import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityFeedbackListComponent } from './security-feedback-list.component';

describe('SecurityFeedbackListComponent', () => {
  let component: SecurityFeedbackListComponent;
  let fixture: ComponentFixture<SecurityFeedbackListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityFeedbackListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityFeedbackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
