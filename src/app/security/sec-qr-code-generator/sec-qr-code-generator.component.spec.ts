import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecQrCodeGeneratorComponent } from './sec-qr-code-generator.component';

describe('SecQrCodeGeneratorComponent', () => {
  let component: SecQrCodeGeneratorComponent;
  let fixture: ComponentFixture<SecQrCodeGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecQrCodeGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecQrCodeGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
