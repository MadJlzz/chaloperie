import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCropperComponent } from './dialog-cropper.component';

describe('DialogCropperComponent', () => {
  let component: DialogCropperComponent;
  let fixture: ComponentFixture<DialogCropperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogCropperComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCropperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
