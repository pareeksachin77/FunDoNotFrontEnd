import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconcompComponent } from './iconcomp.component';

describe('IconcompComponent', () => {
  let component: IconcompComponent;
  let fixture: ComponentFixture<IconcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
